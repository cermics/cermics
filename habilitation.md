---
layout: page
cover-img: /assets/images/coriolis6.jpg
---

## Habilitation Theses

{% for link in site.data.hdr reversed %}
{% if link.LN %}<a href="{{ link.LN }}">**{{ link.AU }}**</a>,{% endif %}{% if link.pdf %}<a href="{{ link.pdf | relative_url }}">**{{ link.AU }}**</a>,{% endif %}{% if link.RE %}**{{ link.AU }}**,{% endif %}
{% if link.TI != "void" %} *{{ link.TI }}*,{% endif %}  
{{ link.N1 }}, {{ link.YP }}

{% endfor %}

