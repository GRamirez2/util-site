---
slug: backgrounds
title: Background
navText: Backgrounds
layout: _layout
---
## Backgrounds
Background classes help with adjusting background images. Using these classes assumes a background image is added to the element in your project's CSS.

#### Available classes for backgrounds:

<div class="flex flex-middle">
  <div class="col-12-12">`.bg-cover`</div>
  <div class="col-6-12">
      <textarea class="bg-c-w"><div id="backgrounds-1" class="bg-cover"></div></textarea>
  </div>
  <div class="col-6-12 bg-c-c">
  </div>
</div>

---

<div class="flex flex-middle">
<div class="col-12-12">`.bg-no-repeat`</div>
  <div class="col-6-12">
      <textarea class="bg-nr-w"><div id="backgrounds-2" class="bg-no-repeat"></div></textarea>
  </div>
  <div class="col-6-12 bg-nr-c">

  </div>
</div>

---

<div class="flex flex-middle">
<div class="col-12-12">`.bg-fixed`</div>
  <div class="col-6-12">
      <textarea class="bg-f-w"><div id="backgrounds-3" class="bg-fixed"></div></textarea>
  </div>
  <div class="col-6-12 bg-f-c">

  </div>
</div>



---

<div class="flex flex-middle">
<div class="col-12-12">`.bg-center`</div>
  <div class="col-6-12">
      <textarea class="bg-ctr-w"><div id="backgrounds-4" class="bg-center"></div></textarea>
  </div>
  <div class="col-6-12 bg-ctr-c">

  </div>
</div>

*** IDs are added to show the background image and do not affect backgrounds or classes in any other way.

### Overlays
Overlays apply a semitransparent color over the background of it's container element. Assuming you have a `div` with a background image and `relative` positioned, you can add a `div` with the class `overlay`. Additionally, adding class `overlay-1` through `overlay-4` will change the opacity of the overlay. The color can be adjusted in the `vars.css` file.
<div class="flex flex-middle">
    <div class="col-6-12">
        <textarea class="o-w"><div id="backgrounds-5" class="bg-cover relative">
        <div class="overlay"></div>
</div></textarea>
    </div>
    <div class="col-6-12 o-c">

    </div>
</div>