---
layout: page
cover-img: /assets/images/coriolis-collage.jpg
---


### home pages on cermics.enpc.fr or cermics-lab.enpc.fr

{% assign team = "" %}{% assign position = "" %}{% assign function = "" %}
{% assign xx = site.staff_members | where_exp: "item", "item.where" %}
{% for staff_member in xx %}{% include staff.html %}{% endfor %}

