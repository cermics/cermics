---
layout: page
cover-img: /assets/images/coriolis1.jpg
---

## Overall organization

### Direction
  
{% assign team = "" %}{% assign position = "" %}{% assign function = "CERMICS Director" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

{% assign team = "" %}{% assign position = "" %}{% assign function = "Deputy Director" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

{% assign team = "" %}{% assign position = "" %}{% assign function = "General Secretary" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

### Administrative Office

{% assign team = "" %}{% assign position = "" %}{% assign function = "Administrative Office" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

### Research

The laboratory is composed of three teams

  * [Applied Probability](../applied-probability) (person in charge: <a href="/staff#guyon">Julien Guyon</a>)
  * [Modeling, Analysis and Simulation](../mas) (person in charge: <a href="/staff#ehrlacher">Virginie Ehrlacher</a>)
  * [Optimization](../optimization) (person in charge: <a href="/staff#leclere">Vincent Leclère)
