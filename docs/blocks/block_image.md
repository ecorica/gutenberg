<h1>Image Block</h1>

The image block is the most basic of all the media-type blocks. Use it to insert a single image somewhere on your page/post.

Here's an example:

```html
<figure class="wp-block-image">
    <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/jetée.jpg" alt="" class="wp-image-53"/>
</figure>
```


<h2>Image with text alternative, description, legend and title</h2>

When we wish to add the alternative text we thus have to complete the attribute " alt ". To add a legend it is enough to add a tag figcaption as we can see it in the code below. As regards the title or the description we cannot add them in code.

Here's an example:

```html
<figure class="wp-block-image">
    <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/jetée.jpg" alt="alternative" class="wp-image-53"/>
    <figcaption>legend</figcaption>
</figure>
```
 
<h2>Image Block Alignment</h2>

By default the image is aligned in the center with space to the left and right.

To align your image you must create a div with the class "wp-block-image".
You must then add a class to the ```<figure>``` tag.

To align on the left you have to put the class "alignleft", for the right "alignright" and for the center "aligncenter".

Here's an example:

```html
<div class="wp-block-image">
    <figure class="alignleft">
        <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/jetée.jpg" alt="alternatif" class="wp-image-53"/>
        <figcaption>legende</figcaption>
    </figure>
</div>
```
Changing the alignment will actually move your image in relation to the content surrounding it.

For example, a left block alignment will move your image to the left, and whatever blocks you have below that, they will float up to the right side of your image.

<h1> Cover Image Block </h1>

When we wish to create a cover image, we have to create a div with predefined classes. It is then enough to add one background-image in the attribute style of the div. We can also add a text place in the div a tag ```<p>``` with classes predefined by the editor there.

Here's an example:

```html
<div class="wp-block-cover-image has-background-dim" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/jetée.jpg)">
    <p class="wp-block-cover-image-text">legende</p>
</div>
```

<h2> Customize a Cover Image </h2>

<h3>Cover image Block Alignment</h3>

The alignment to the left and to the right of the cover image allows to position of the text beside the cover image block.

To align on the left you have to put the class "alignleft", for the right "alignright" and for the center "aligncenter".

Here's an example:

```html
<div class="wp-block-cover-image has-background-dim alignright" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-4.jpg)">
    <p class="wp-block-cover-image-text">hello</p>
</div>
```
Changing the block alignment will actually move your cover image in relation to the content surrounding it.

For example, a right block alignment will move your cover image to the right, and whatever blocks you have below that, they will float up to the left side of your cover image.

<h3>Cover Image Text Alignment</h3>

When the cover image is aligned to the left or to the right the contents are aligned by default in the center. By default the contents are positioned in the center.

To align the text in the left you have to put the class "has-left-content", for the right "has-right-content" and for the center "has-center-content".

Here's an example:

```html
<div class="wp-block-cover-image has-background-dim has-left-content" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-4.jpg)">
    <p class="wp-block-cover-image-text">hello</p>
</div>
```

<h3>Fixed Background</h3>

If you want to have the background image fixed, you must add to the div the class "has-parralax".
Here's an example:

```html

<div class="wp-block-cover-image has-background-dim has-parallax" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-4.jpg)">
    <p class="wp-block-cover-image-text">hello</p>
</div>

```


<h3> Color Mask </h3>

For the color mask, you must choose the color of the theme or add a custom color with a "background color".

Here's an example:

```html

---Theme color---

<div class="wp-block-cover-image has-vivid-red-background-color has-background-dim" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-4.jpg)">
    <p class="wp-block-cover-image-text">hello</p>
</div>

--- Custom color --

<div class="wp-block-cover-image has-background-dim" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-4.jpg);background-color:#9f5656">
    <p class="wp-block-cover-image-text">hello</p>
</div>

```

<h3> Background Dimness </h3>


We can set the background dimness of an image in increment of 10, from 0 to 100. We must add the class "has-background-dim -..." with the last parameter the desired value. By default the value is 50.

Here's an example:

```html

<div class="wp-block-cover-image has-background-dim-70 has-background-dim" style="background-image:url(http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-4.jpg)">
    <p class="wp-block-cover-image-text">hello</p>
</div>

```

<h1> Gallery image </h1>

For the creation of a gallery of images, we have to create a structure of tag  ``` <ul><li></li></ul > ```. We find the class "columns-", which is going to allow us to create up to 3 columns (maximum) with images.

Here's an example:

```html
<ul class="wp-block-gallery columns-3 is-cropped">
    <li class="blocks-gallery-item">
       <figure>
            <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/pexels-photo-574043.jpeg" alt="immeuble" data-id="73" data-link="http://devegidio.beapi.space/test-2/pexels-photo-574043/" class="wp-image-73"/>
            <figcaption>immeuble</figcaption>
        </figure>
    </li>
    <li class="blocks-gallery-item">
        <figure>
            <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/cold-conifers-daylight-701449.jpg" alt="montagne" data-id="79" data-link="http://devegidio.beapi.space/test-2/cold-conifers-daylight-701449/" class="wp-image-79"/>
            <figcaption>montagne</figcaption>
        </figure>
    </li>
    <li class="blocks-gallery-item">
        <figure>
            <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-1.jpg" alt="Montagnes" data-id="80" data-link="http://devegidio.beapi.space/test-2/car-clouds-daylight-1332373-2/" class="wp-image-80"/>
            <figcaption>Montagnes ciel</figcaption>
        </figure>
    </li>
</ul>
```

<h2>Gallery Image Block Alignment </h2>

By default the gallery of images is aligned in the center.

To align the text in the left you have to put the class "has-left-content", for the right "has-right-content" and for the center "has-center-content".

Here's an example:


```html
<ul class="wp-block-gallery columns-3 alignleft is-cropped">
    <li class="blocks-gallery-item">
       <figure>
            <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/pexels-photo-574043.jpeg" alt="immeuble" data-id="73" data-link="http://devegidio.beapi.space/test-2/pexels-photo-574043/" class="wp-image-73"/>
            <figcaption>immeuble</figcaption>
        </figure>
    </li>
    <li class="blocks-gallery-item">
        <figure>
            <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/cold-conifers-daylight-701449.jpg" alt="montagne" data-id="79" data-link="http://devegidio.beapi.space/test-2/cold-conifers-daylight-701449/" class="wp-image-79"/>
            <figcaption>montagne</figcaption>
        </figure>
    </li>
    <li class="blocks-gallery-item">
        <figure>
            <img src="http://devegidio.beapi.space/wp-content/uploads/2018/10/car-clouds-daylight-1332373-1.jpg" alt="Montagnes" data-id="80" data-link="http://devegidio.beapi.space/test-2/car-clouds-daylight-1332373-2/" class="wp-image-80"/>
            <figcaption>Montagnes ciel</figcaption>
        </figure>
    </li>
</ul>
```

<h1> Image online </h1>

We can place an image online with text. Just place an image in a ```<p>``` tag.

Here's an example:

```html

<p><img class="wp-image-84" style="width: 150px;" src="http://devegidio.beapi.space/wp-content/uploads/2018/10/abstract-astrology-astronomy-1169754-1.jpg" alt="alternative">univers</p>

```
