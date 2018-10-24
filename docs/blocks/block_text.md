
<h1> Title Block </h1>

As in the classic editor there are titles from ```<h1>``` to ```<h6>```.

```html

<h1>Hello</h1>

<h2>Hello</h2>

<h3>Hello</h3>

<h4>Hello</h4>

<h5>Hello</h5>

<h6>Hello</h6>

```

<h2> Title Block Alignment </h2>

We can change the title's alignment by adding a css style.

Here's an example:

```html

<h1 style="text-align:left;">Hello</h1>

<h1 style="text-align:center;">Hello</h1>

<h1 style="text-align:right;">Hello</h1>

```

<h1> Paragraph Block </h1>

The ```<p>```tag represents a paragraph of text.

Here's an example:

```html

<p>I love WordPress</p>

```

<h2> Customize a Paragraph Block </h2>

<h3> Text Block Alignment </h3>

We can change the text alignment by adding a css style.

Here's an example:

```html

<p style="text-align:left;">Hello</p>

<p style="text-align:center;">Hello</p>

<p style="text-align:right;">Hello</p>

```

<h3>Font size </h3>

We can customize the size of a paragraph.

There are two possibilities :

- classes offered by the editor
- customize with a font-size

Here's an example:

```html

<p class="has-small-font-size">Hello Wordpress !</p>

<p>Hello Wordpress !</p> (By default it's normal)

<p class="has-medium-font-size">Hello Wordpress !</p> 

<p class="has-large-font-size">Hello Wordpress !</p> 

<p class="has-huge-font-size">Hello Wordpress !</p> 

<p style="font-size:23px">Hello Wordpress !</p>

```

<h3> Drop cap </h3>

We can put a drop cap, by adding the following class "has-drop-cap".

Here's an example:

```html

<p class="has-drop-cap">Hello Wordpress !</p>

```
<h3> Colors </h3>

We can change the color of the paragraph block by adding the class "has-background".

After adding this class we have two possibilities.

The first is to add the colors proposed by the publisher.

The second is to add a custom color with a background-color.

Here's an example:

```html

<p class="has-background has-pale-pink-background-color">Helllo WordPress !</p>

<p class="has-background has-vivid-red-background-color">Helllo WordPress !</p>

<p class="has-background has-luminous-vivid-orange-background-color">Helllo WordPress !</p>

<p class="has-background has-luminous-vivid-amber-background-color">Helllo WordPress !</p>

<p class="has-background has-light-green-cyan-background-color">Helllo WordPress !</p>

<p class="has-background has-vivid-green-cyan-background-color">Helllo WordPress !</p>

<p class="has-background has-pale-cyan-blue-background-color">Helllo WordPress !</p>

<p class="has-background has-vivid-cyan-blue-background-color">Helllo WordPress !</p>

<p class="has-background has-very-light-gray-background-color">Helllo WordPress !</p>

<p class="has-background has-cyan-bluish-gray-background-color">Helllo WordPress !</p>

<p class="has-background has-very-dark-gray-background-color">Helllo WordPress !</p>

<p style="background-color:#732929" class="has-background">Helllo WordPress !</p>

```

To change the color of the text we must add the class "has-text-color" which indicates that we want to change the color of the text.
 
For the choice of the color we can use the colors of the theme or use a color to customize with the style "color".

Here's an example:

```html

<p class="has-text-color has-pale-pink-color">Helllo WordPress !</p>

<p style="color:#732929" class="has-text-color">Helllo WordPress !</p>

```

<h1> Bold </h1>

The ```<strong>``` tag puts the text in bold to indicate its importance. We can also find this tag in other tags.

Here's an example:

```html

<strong>Important</strong>

<p>The text is very <strong>Important</strong></p>

```

Example : 

<strong>Important</strong>

<p>The text is very <strong>important</strong></p>


<h1> Italics </h1>

The ```<em>``` tag puts a word or phrase in italic. We can find it in a paragraph or in a title.

Here's an example:

```html

<em>Important</em>

<p>The text is in <em>italic</em></p>

```

Example :

<em>Italic</em>

<p>The text is in <em>italic</em></p>

<h1>Strikethrough</h1>

A text with a delete part

Here's an example:

```html

 <del>delete part</del>
 
 <p>A texte with a <del>delete part</del></p>
  
 <h6>A title with a <del>delete part</del></h6>

```

Example :

<del>delete part</del>
 
<p>A texte with a <del>delete part</del></p>

<h4>A title  with a <del>delete part</del></h4>

<h1> List Block</h1>

<h2>Unordered list</h2>

To create an unordered list, use the ```<ul>``` and  ```<li>``` tags.

Here's an example:

```html
<ul>
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
</ul>
```

<h2>Ordered list</h2>

To create an ordered list, use the ```<ul>``` and  ```<li>``` tags.

Here's an example:

```html
<ol>
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
</ol>
```

<h1> File </h1>

To add a file to download, there is a predefined class "wp-block-file" and "wp-block-file_button". The first indicates that the block is a file and the second to create the button to download the file.

```html

<div class="wp-block-file"><a href="http://devegidio.beapi.space/wp-content/uploads/2018/10/abstract-astrology-astronomy-1169754-1.jpg">abstract-astrology-astronomy-1169754</a><a href="http://devegidio.beapi.space/wp-content/uploads/2018/10/abstract-astrology-astronomy-1169754-1.jpg" class="wp-block-file__button" download="abstract-astrology-astronomy-1169754">Télécharger</a></div>

```

<h1> Audio </h1>

For a sound file, we need to create a ```<figure>``` tag with a predefined class "wp-block-audio" with a ``` <audio> ``` tag inside. We can add a description with the ```<figcaption>``` tag.

Here's an example:

```html

<figure class="wp-block-audio aligncenter">
    <audio controls src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3"></audio>
    <figcaption>Free song</figcaption>
</figure>

```

<h1> Video </h1>


For a video file, we need to create a ```<figure>``` tag with a predefined class "wp-block-video" with a ``` <video> ``` tag inside. We can add a description with the ```<figcaption>``` tag.

Here's an example:

```html

<figure class="wp-block-video">
    <video controls src="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"></video>
    <figcaption>Free movie</figcaption>
</figure>

```

<h1> Quote </h1>

To create a quote we use a ```<blockquote>``` tag. To align the quote in the center for example, just add a style "text-align: center" to the ```<blockquote> ```.

Here's an example:

```html

<blockquote class="wp-block-quote"><p>Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.<br></p></blockquote>

```

Example :

<blockquote class="wp-block-quote"><p>Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.<br></p></blockquote>

<p><em> Albert Einstein </em></p>


<h1>Pull Quote</h1>

For the creation of a pull quote you have to put the class "wp-block-pull" and follow the structure with the ```<figure>``` tag.

Here's an example:

```html

<figure class="wp-block-pullquote">
    <blockquote>
        <p>
            <strong> It’s gonna be a bumpy ride!  </strong>
        </p>
        <cite>
            <em>MARGO CHANNING (BETTE DAVIS)</em><br>
        </cite>
    </blockquote>
</figure>

```
<h2> Customize a Pull Quote Block </h2>

We can change the display of the block by adding, "is-style-solid-color". To return to the default display just replace the class "is-style-solid-color" by "is-style-default".

Here's an example:

```html

<figure class="wp-block-pullquote is-style-solid-color">
    <blockquote>
        <p>
            <strong> It’s gonna be a bumpy ride!  </strong>
        </p>
        <cite>
            <em>MARGO CHANNING (BETTE DAVIS)</em><br>
        </cite>
    </blockquote>
</figure>

```

<h3> Pullquote Alignment </h3>

To align on the left you have to put the class "alignleft", for the right "alignright" and for the center "aligncenter".

A pullquote's alignment will float the entire pullquote to the left or right, and let the following content wrap around the side of it.

Here's an example:

```html
<figure class="wp-block-pullquote alignleft">
    <blockquote>
        <p>
            <strong> It’s gonna be a bumpy ride!  </strong>
        </p>
        <cite>
            <em>MARGO CHANNING (BETTE DAVIS)</em><br>
        </cite>
    </blockquote>
</figure>
```


<h3> Border and Text </h3>

We can customize the block by changing the color of the borders. Simply add the style of the desired color.

Here's an example:

```html
<figure class="wp-block-pullquote" style="border-color:#cf2e2e">
    <blockquote>
        <p>
            <strong> It’s gonna be a bumpy ride!  </strong>
        </p>
        <cite>
            <em>MARGO CHANNING (BETTE DAVIS)</em><br>
        </cite>
    </blockquote>
</figure>
```

To change the color of the text we must add the "has-text-color" to define the color change. To assign a color we can use the colors proposed by the editor or customize the color.

Here's an example:

```html

-- Default color editor --

<figure class="wp-block-pullquote">
    <blockquote class="has-text-color has-vivid-cyan-blue-color">
        <p>
            <strong> It’s gonna be a bumpy ride!  </strong>
        </p>
        <cite>
            <em>MARGO CHANNING (BETTE DAVIS)</em><br>
        </cite>
    </blockquote>
</figure>

-- Custom color --

<figure class="wp-block-pullquote">
    <blockquote class="has-text-color" style="color:#368e6d">
        <p>
            <strong> It’s gonna be a bumpy ride!  </strong>
        </p>
        <cite>
            <em>MARGO CHANNING (BETTE DAVIS)</em><br>
        </cite>
    </blockquote>
</figure>
    


```

<h1> Table </h1>

To create a table we use the following structure with the class "wp-block-table".

Here's an example:

```html
<table class="wp-block-table">
    <tbody>
        <tr>
            <td>Last name</td>
            <td>First name</td>
            <td>Age</td>
            <td>City</td>
        </tr>
        <tr>
            <td>Smith</td>
            <td>John</td>
            <td>22</td>
            <td>London</td>
        </tr>
        <tr>
            <td>Anders</td>
            <td>Katty</td>
            <td>26</td>
            <td>New york</td>
        </tr>
    </tbody>
</table>
```

<h2>  Customize a Table Block  </h2>

<h3> Table Alignment </h3>

To align the table on the right we add the class "alignright", to align on the left we add the class "alignleft" and to align in the center we add the class "align".

Here's an example:

```html

<table class="wp-block-table alignleft">
    <tbody>
        <tr>
            <td>Last name</td>
            <td>First name</td>
            <td>Age</td>
            <td>City</td>
        </tr>
        <tr>
            <td>Smith</td>
            <td>John</td>
            <td>22</td>
            <td>London</td>
        </tr>
        <tr>
            <td>Anders</td>
            <td>Katty</td>
            <td>26</td>
            <td>New york</td>
        </tr>
    </tbody>
</table>

```

<h1> Preformatted block </h1>

We can to add the preformatted block that is very similar to the code block, with a few small differences.

Preformatted blocks keep all spaces & line-breaks intact, and display text exactly as you type it.

However, they don't use the HTML code (tag) element, and come with a few more styling options.

Here's an example:

```html

<pre class="wp-block-preformatted">Hello !</pre>

```

<h1> Verse block </h1>

We can to add the verse block is for writing poetry and other literary expressions.

Here's an example:

```html

<pre class="wp-block-verse">Hello !</pre>

```

<h1> Button </h1>

To add a button we use the structure below.

Here's an example:

```html

<div class="wp-block-button"><a href="#" class="wp-block-button__link">Button</a></div>

```

<h2> Customize an Button </h2>

<h3> Button Alignment </h3>

We can align the button to the left, center and right

Here's an example:

```html

<div class="wp-block-button alignleft"><a href="#" class="wp-block-button__link">Button</a></div>

<div class="wp-block-button aligncenter"><a href="#" class="wp-block-button__link">Button</a></div>

<div class="wp-block-button alignright"><a href="#" class="wp-block-button__link">Button</a></div>

```

<h3> Button style </h3>

We can choose the style of the button with classes: 'is-style-default', 'is-style-outline' and 'is-style-squared'.

Here's an example:

```html

<div class="wp-block-button is-style-default"><a class="wp-block-button__link"></a>Default</div>

<div class="wp-block-button is-style-outline"><a href="#" class="wp-block-button__link">Outline</a></div>

<div class="wp-block-button is-style-squared"><a href="#" class="wp-block-button__link">Squared</a></div>

```

<h3> Button colors </h3>

We can change the color of the button and the color of the text.

For the button, we can choose a custom color or take a default color proposed by the editor.

Here's an example:

```html

-- Background Color --

<div class="wp-block-button"><a class="wp-block-button__link has-background has-vivid-red-background-color"></a></div>

<div class="wp-block-button"><a class="wp-block-button__link has-background" style="background-color:#4937a3"></a></div>

-- Text color -- 

<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-vivid-red-color"></a></div>

<div class="wp-block-button"><a class="wp-block-button__link has-text-color" style="color:#611818"></a></div>

```

<h1> Text column </h1>

The text columns block lets you create multi-column layouts that include text only.

We can select anywhere from 2-6 columns.

Here's an example:

```html

<div class="wp-block-columns has-2-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"></div>
<!-- /wp:column --></div>

```

<h1> Separator Block </h1>

To create a separator, simply create a ```<hr>``` tag and assign it a class "wp-block-separator".

Here's an example:

```html

<hr class="wp-block-separator"/>

```

<h1> Spacer Block </h1>

To create a spacer block, simply create a div, put a height and attribute a class.

Here's an example:

```html

<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>

```

<h1> Embed Blocks </h1>


When we incorporate an url, we must indicate the source of the url, the type of content, the format if it is a video and the ratio to be respected.


For example for youtube content:

Here's an example:

```html
<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
    <div class="wp-block-embed__wrapper">https://www.youtube.com/watch?v=ChxWUPZwshY</div>
    <figcaption>Youtube embed</figcaption>
</figure>
```


We find "wp-block-embed-youtube" which indicates where the content comes from, "wp-block-embed" which specifies the type of the block, "is-type-video" which indicates the type of content, "wp -embed-aspect-16-9 "which indicates the format of the content and" wp-has-aspect-ratio " which indicates the ratio to be respected.

If the block type is a text then the class that indicates the block type is "is-type-rich"