/**
 * Internal dependencies
 */
import {
	META_KEY,
	clickBlockAppender,
	getEditedPostContent,
	newPost,
	pressWithModifier,
	pressTimes,
} from '../support/utils';

/**
 * The modifier keys needed to invoke a 'select the next word' keyboard shortcut.
 *
 * @type {string}
 */
const SELECT_WORD_MODIFIER_KEYS = process.platform === 'darwin' ? [ 'Shift', 'Alt' ] : [ 'Shift', 'Control' ];

describe( 'Links', () => {
	beforeEach( async () => {
		await newPost();
	} );

	const waitForAutoFocus = async () => {
		await page.waitForFunction( () => !! document.activeElement.closest( '.editor-url-input' ) );
	};

	const moveMouse = async () => {
		await page.mouse.move( 200, 300, { steps: 10 } );
		await page.mouse.move( 250, 350, { steps: 10 } );
	};

	it( 'can be created by selecting text and clicking Link', async () => {
		// Create a block with some text
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Click on the Link button
		await page.click( 'button[aria-label="Link"]' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		// Type a URL
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Click on the Apply button
		await page.click( 'button[aria-label="Apply"]' );

		// The link should have been inserted
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	it( 'can be created by selecting text and using keyboard shortcuts', async () => {
		// Create a block with some text
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Press Cmd+K to insert a link
		await pressWithModifier( META_KEY, 'K' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		// Type a URL
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Press Enter to apply the link
		await page.keyboard.press( 'Enter' );

		// The link should have been inserted
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	it( 'can be created without any text selected', async () => {
		// Create a block with some text
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg: ' );

		// Trigger isTyping = false
		await moveMouse();

		// Press Cmd+K to insert a link
		await pressWithModifier( META_KEY, 'K' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		// Type a URL
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Press Enter to apply the link
		await page.keyboard.press( 'Enter' );

		// A link with the URL as its text should have been inserted
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	it( 'can be created instantly when a URL is selected', async () => {
		// Create a block with some text
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg: https://wordpress.org/gutenberg' );

		// Select the URL
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Click on the Link button
		await page.click( 'button[aria-label="Link"]' );

		// A link with the selected URL as its href should have been inserted
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	it( 'is not created when we click away from the link input', async () => {
		// Create a block with some text
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Click on the Link button
		await page.click( 'button[aria-label="Link"]' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		// Type a URL
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Click somewhere else - it doesn't really matter where
		await page.click( '.editor-post-title' );
	} );

	const createAndReselectLink = async () => {
		// Create a block with some text
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Click on the Link button
		await page.click( 'button[aria-label="Link"]' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		// Type a URL
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Click on the Apply button
		await page.click( 'button[aria-label="Apply"]' );
	};

	it( 'can be edited', async () => {
		await createAndReselectLink();

		// Click on the Edit button
		await page.click( 'button[aria-label="Edit"]' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		// Change the URL
		await page.keyboard.type( '/handbook' );

		// Click on the Apply button
		await page.click( 'button[aria-label="Apply"]' );

		// The link should have been updated
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	it( 'can be removed', async () => {
		await createAndReselectLink();

		// Click on the Unlink button
		await page.click( 'button[aria-label="Unlink"]' );

		// The link should have been removed
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	const toggleFixedToolbar = async ( b ) => {
		await page.click( '.edit-post-more-menu button' );
		const button = ( await page.$x( "//button[contains(text(), 'Unified Toolbar')]" ) )[ 0 ];
		const buttonClassNameProperty = await button.getProperty( 'className' );
		const buttonClassName = await buttonClassNameProperty.jsonValue();
		const isSelected = buttonClassName.indexOf( 'is-selected' ) !== -1;
		if ( isSelected !== b ) {
			await button.click();
		} else {
			await page.click( '.edit-post-more-menu button' );
		}
	};

	it( 'allows Left to be pressed during creation when the toolbar is fixed to top', async () => {
		await toggleFixedToolbar( true );

		await clickBlockAppender();
		await page.keyboard.type( 'Text' );
		await page.click( 'button[aria-label="Link"]' );

		// Typing "left" should not close the dialog
		await page.keyboard.press( 'ArrowLeft' );
		let popover = await page.$( '.editor-url-popover' );
		expect( popover ).not.toBeNull();

		// Escape should close the dialog still.
		await page.keyboard.press( 'Escape' );
		popover = await page.$( '.editor-url-popover' );
		expect( popover ).toBeNull();
	} );

	it( 'allows Left to be pressed during creation in "Docked Toolbar" mode', async () => {
		await toggleFixedToolbar( false );

		await clickBlockAppender();
		await page.keyboard.type( 'Text' );

		// we need to trigger isTyping = false
		await moveMouse();
		await page.waitForSelector( 'button[aria-label="Link"]' );
		await page.click( 'button[aria-label="Link"]' );

		// Typing "left" should not close the dialog
		await page.keyboard.press( 'ArrowLeft' );
		let popover = await page.$( '.editor-url-popover' );
		expect( popover ).not.toBeNull();

		// Escape should close the dialog still.
		await page.keyboard.press( 'Escape' );
		popover = await page.$( '.editor-url-popover' );
		expect( popover ).toBeNull();
	} );

	it( 'can be edited with collapsed selection', async () => {
		await createAndReselectLink();
		// Make a collapsed selection inside the link
		await pressTimes( 'ArrowRight', 3 );
		await moveMouse();
		await page.click( 'button[aria-label="Edit"]' );
		await waitForAutoFocus();
		await page.keyboard.type( '/handbook' );
		await page.click( 'button[aria-label="Apply"]' );
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	const createPostWithTitle = async ( titleText ) => {
		await newPost();
		await page.type( '.editor-post-title__input', titleText );
		await page.click( '.editor-post-publish-panel__toggle' );

		// Disable reason: Wait for the animation to complete, since otherwise the
		// click attempt may occur at the wrong point.
		// eslint-disable-next-line no-restricted-syntax
		await page.waitFor( 100 );

		// Publish the post
		await page.click( '.editor-post-publish-button' );

		// Return the URL of the new post
		await page.waitForSelector( '.post-publish-panel__postpublish-post-address input' );
		return page.evaluate( () => document.querySelector( '.post-publish-panel__postpublish-post-address input' ).value );
	};

	// Test for regressions of https://github.com/WordPress/gutenberg/issues/10496.
	it( 'allows autocomplete suggestions to be selected with the mouse', async () => {
		// First create a post that we can search for using the link autocompletion.
		const titleText = 'Test post mouse';
		const postURL = await createPostWithTitle( titleText );

		// Now create a new post and try to select the post created previously
		// from the autocomplete suggestions.
		await newPost();
		await clickBlockAppender();
		await page.keyboard.type( 'This is Gutenberg' );
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );
		await page.click( 'button[aria-label="Link"]' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		await page.keyboard.type( titleText );
		await page.waitForSelector( '.editor-url-input__suggestion' );
		const autocompleteSuggestions = await page.$x( `//*[contains(@class, "editor-url-input__suggestion")]//button[contains(text(), '${ titleText }')]` );

		// Expect there to be some autocomplete suggestions.
		expect( autocompleteSuggestions.length ).toBeGreaterThan( 0 );

		const firstSuggestion = autocompleteSuggestions[ 0 ];

		// Expect that clicking on the autocomplete suggestion doesn't dismiss the link popover.
		await firstSuggestion.click();
		expect( await page.$( '.editor-url-popover' ) ).not.toBeNull();

		// Expect the url input value to have been updated with the post url.
		const inputValue = await page.evaluate( () => document.querySelector( '.editor-url-input input[aria-label="URL"]' ).value );
		expect( inputValue ).toEqual( postURL );

		// Expect the link to apply correctly.
		// Note - have avoided using snapshots here since the link url can't be determined ahead of time.
		await page.click( 'button[aria-label="Apply"]' );
		const linkHref = await page.evaluate( () => document.querySelector( '.editor-format-toolbar__link-container-value' ).href );
		expect( linkHref ).toEqual( postURL );
	} );

	// Test for regressions of https://github.com/WordPress/gutenberg/issues/10496.
	it( 'allows autocomplete suggestions to be navigated with the keyboard', async () => {
		const titleText = 'Test post keyboard';
		const postURL = await createPostWithTitle( titleText );

		await newPost();
		await clickBlockAppender();

		// Now in a new post and try to create a link from an autocomplete suggestion using the keyboard.
		await page.keyboard.type( 'This is Gutenberg' );
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Press Cmd+K to insert a link
		await pressWithModifier( META_KEY, 'K' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();

		await page.keyboard.type( titleText );
		await page.waitForSelector( '.editor-url-input__suggestion' );
		const autocompleteSuggestions = await page.$x( `//*[contains(@class, "editor-url-input__suggestion")]//button[contains(text(), '${ titleText }')]` );

		// Expect there to be some autocomplete suggestions.
		expect( autocompleteSuggestions.length ).toBeGreaterThan( 0 );

		// Expect the the first suggestion to be selected when pressing the down arrow.
		await page.keyboard.press( 'ArrowDown' );
		const isSelected = await page.evaluate( () => document.querySelector( '.editor-url-input__suggestion' ).getAttribute( 'aria-selected' ) );
		expect( isSelected ).toBe( 'true' );

		// Expect the link to apply correctly when pressing Enter.
		// Note - have avoided using snapshots here since the link url can't be determined ahead of time.
		await page.keyboard.press( 'Enter' );
		const linkHref = await page.evaluate( () => document.querySelector( '.editor-format-toolbar__link-container-value' ).href );
		expect( linkHref ).toEqual( postURL );
	} );

	it( 'allows use of escape key to dismiss the url popover', async () => {
		const titleText = 'Test post escape';
		await createPostWithTitle( titleText );

		await newPost();
		await clickBlockAppender();

		// Now in a new post and try to create a link from an autocomplete suggestion using the keyboard.
		await page.keyboard.type( 'This is Gutenberg' );
		await pressWithModifier( SELECT_WORD_MODIFIER_KEYS, 'ArrowLeft' );

		// Press Cmd+K to insert a link
		await pressWithModifier( META_KEY, 'K' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();
		expect( await page.$( '.editor-url-popover' ) ).not.toBeNull();

		// Trigger the autocomplete suggestion list and select the first suggestion.
		await page.keyboard.type( titleText );
		await page.waitForSelector( '.editor-url-input__suggestion' );
		await page.keyboard.press( 'ArrowDown' );

		// Expect the the escape key to dismiss the popover when the autocomplete suggestion list is open.
		await page.keyboard.press( 'Escape' );
		expect( await page.$( '.editor-url-popover' ) ).toBeNull();

		// Press Cmd+K to insert a link
		await pressWithModifier( META_KEY, 'K' );

		// Wait for the URL field to auto-focus
		await waitForAutoFocus();
		expect( await page.$( '.editor-url-popover' ) ).not.toBeNull();

		// Expect the the escape key to dismiss the popover normally.
		await page.keyboard.press( 'Escape' );
		expect( await page.$( '.editor-url-popover' ) ).toBeNull();
	} );
} );
