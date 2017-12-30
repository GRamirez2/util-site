---
slug: index
title: Útil CSS • A CSS Utility Kit
navText: Intro
layout: _layout
---
## Utilities ≠ Framework
Útil is not a framework but rather a set of utility classes that allow for rapid layouts.

Where a framework can be rather opinionated in it's markup, layout and/or styling, utility classes leave all that up to you and only provide classes that help you layout your site according to your project's needs.

### Why?
This idea was sparked long ago when I read Dave Rupert's post [Responsive Deliverables](http://daverupert.com/2013/04/responsive-deliverables/) wherein he famously wrote _"Tiny Bootstraps for Every Client."_:

> Responsive deliverables should look a lot like fully-functioning Twitter Bootstrap-style systems custom tailored for your clients’ needs. These living code samples are self-documenting style guides that extend to accommodate a client’s needs as well as the needs of the ever-evolving multi-device web.

Since then, I have been borrowing/stealing pieces of code and conventions from a multitude of frameworks and blog posts. It is only recently that I began compiling and keeping a collection of the best of these frameworks. I've also learned a lot from [BassCSS](http://basscss.com/) and [Tachyons](http://tachyons.io/) and I may have just duplicated their efforts. However, the best way to learn is to build things, and here is my ongoing effort to build something useful for myself. I've also borrowed code from [Skeleton](http://getskeleton.com/), whose simplicity I've loved for many years.

I've made a few decisions that I think are important to keep in mind:
1. No CSS pre/post processors (more on this later)
2. No prefixes. These can be added a variety of ways in your build process.
3. No JavasScript. All your JavaScript fanciness is up to you.

And on to the good parts...

### Mobile First

All classes use the same mobile-first approach. This means that any class without a modifier will be applied to all screens starting from mobile, or small, screens all the way up to large screens.

For example, to hide or use `display: none` on all screens, you can add a `none` class like so:

```
<div class="none">This will not display on any screen</div>
```

However, if you would only like to hide it on medium to large screens, you can do the following:

```
<div class="none-m">This will not display on medium to large screens</div>
```

You can also reverse the display character if by adding a `block`, `inline-block` or `inline` class. If, for instance, you want to hide a div on mobile screens, you can do the following:

```
<div class="none block-m">This will not display on any mobile screens</div>
```

All classes will have the `-m` or `-l` modifiers available.




