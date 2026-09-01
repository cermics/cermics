---
layout: page
cover-img: /assets/images/coriolis.jpg
---

### Phd and Postdocs Presentations on <a href="https://www.youtube.com/playlist?list=PLFIuidaxkf2xSjc6T5jh4g8PRnmPHQGTy">YouTube</a>

<br> 
<br>

<style>
    .image-gallery {overflow: auto; margin-left: -1%!important;}
    .image-gallery li {float: left; display: block; margin: 0 0 1% 1%; width: 30%;}
    .image-gallery li a {text-align: center; text-decoration: none!important; color: #777;}
    .image-gallery li a span {display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 3px 0;}
    .image-gallery li a img {width: 100%; display: block;}
</style>

<ul class="image-gallery">
  {% for file in site.data.youtube-phd  %}
  <li><a href="{{ file.video }}"><img src="{{ file.img }}" /><small>{{ file.title }}</small></a></li>
  {% endfor %}
</ul>




