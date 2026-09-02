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

  * [Applied Probability](../applied-probability) (person in charge: [Julien Guyon](../staff#guyon)
  * [Modeling, Analysis and Simulation](../mas) (person in charge: [Virginie Ehrlacher](../staff#ehrlacher)
  * [Optimization](../optimization) (person in charge: [Vincent Leclère](../staff#leclere)
