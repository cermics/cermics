---
layout: page
cover-img: /assets/images/coriolis6.jpg
---

## PhD Theses 
{% assign year = "3000" %}

{% for link in site.data.theses reversed %}
 {% if link.PY != year %}{% assign year = link.PY %} <hr><h2>{{ year }}</h2>{% endif %}

 {% if link.id != "void" %}
 <a href="https://theses.fr/{{  link.id }}"><img src="{{ '/assets/images/these-fr.svg' | relative_url }}" width="30"></a>
 {% else %}
  <a href="{{ link.url | relative_path }}">(pdf)</a>
 {% endif %} **{{ link.AU }}**, *{{ link.TI }}*,  
 {{ link.N1 }} 

{% endfor %}



