---
layout: page
cover-img: /assets/images/coriolis2.jpg
---

###  Applied Probability Team

The applied probability team works on numerical methods in probability, the
probabilistic interpretation of PDEs, optimal transport, probabilistic models in
finance, risk management, and biology, and statistical machine learning.

#### Main collaborations

- [INRIA MathRisk project-team](https://team.inria.fr/mathrisk/en/)
- [Financial Risks chair](http://www.institutlouisbachelier.org/programme/risques-financiers)
- [Futures of Quantitative Finance chair](https://futures-quantitative-finance.u-paris.fr/)

#### Team Leader: 

{% assign team = "PROBA" %}{% assign function = "Team Leader" %}
{% assign position = "Researcher" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

#### Permanent members: 

{% assign function = "" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

#### Associated Members:

{% assign position = "Associated" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

#### Postdoctoral fellows:

{% assign position = "Postdoctoral fellow" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

#### PhD Students:

{% assign position = "PhD Student" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

