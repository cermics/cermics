---
layout: page
cover-img: /assets/images/coriolis-reunion.jpg
---

**See the <a href="https://calendar.google.com/calendar/embed?src=polytechnique.org_mtciqkdgk679fo5h6vig5nihjc%40group.calendar.google.com&amp;ctz=Europe%2FParis">Google Agenda of the colloquium</a>, and add the <a href="https://calendar.google.com/calendar/ical/polytechnique.org_mtciqkdgk679fo5h6vig5nihjc%40group.calendar.google.com/public/basic.ics">iCal url</a> to your calendar**

### Next session

<div class="post" style="text-align: center"><strong>Christian Lubich (Universität Tübingen)</strong></div>

<p style="text-align: center"><em>Thursday, May 7th, 2026, 10h30 Salle de séminaire du CERMICS</em></p>
<p style="text-align: center">
<span style="text-decoration: underline">Dynamical low-rank approximation and time integration of tree tensor networks
</span></p>

The talk first presents some numerical experiments with time-dependent tree
tensor network algorithms for the approximation of quantum spin system
dynamics. It continues with the basics in the design of time integration methods
that are robust to the typical presence of small singular values, that have good
structure-preserving properties (norm, energy conservation or dissipation), and
that allow for rank (= bond dimension) adaptivity and for parallelism. The
discussion of basic concepts forms the main part of the talk and will be done
for the smallest possible type of tensor network differential equations, namely
low-rank matrix differential equations, which are of interest in their own
right. Once this technically simplest, yet nontrivial case is understood, there
is a systematic path to the extension of the low-rank integrators and their
favourable properties to general tree tensor networks.

This talk is based on joint work with many colleagues and former and present
students, among which I wish to single out Othmar Koch for the first
mathematical work on dynamical low-rank approximation (DLRA) in 2007, Ivan
Oseledets for jointly discovering the first robust DLRA integrator in 2014 (the
projector-splitting integrator), Gianluca Ceruti and Jonas Kusch for jointly
developing the Basis Update &amp; Galerkin (BUG) integrators since 2022, and
Hanna Walach, Gianluca Ceruti, Dominik Sulz and Charlotte Verhoeven for the
recent systematic extension from low-rank matrices to general tree tensor
networks both in theory and in increasingly efficient implementations.

### Past sessions

{% for link in site.data.colloquium %}
{% if link.next != "yes" %}
{% if link.sem == "scommun" %}
{{ link.date | date : "%B %-d %Y" }}{% if link.hour != "void" %}, {{ link.hour }}{% endif %}: **{{ link.AU }}**,  
{% if link.UN %}{{ link.UN }}  {% endif %}
{% if link.TI %}*{{ link.TI }}*.{% endif %}
{% for sublink in link.PROG %}
 - {{ sublink.hour }}: **{{ sublink.AU }}**,  
 {% if sublink.UN %}{{ sublink.UN }}  {% endif %}
 *{{ sublink.TI }}*. {% if sublink.slides %}<a href="{{ sublink.slides | relative_url }}">(slides), </a>{% endif %}
{% if sublink.abstract %}<a href="{{ sublink.abstract }}">(abstract)</a>{% endif %}
{% endfor %}
{% else %}
{{ link.date | date : "%B %-d %Y" }}{% if link.hour != "void" %}, {{ link.hour }}{% endif %}: **{{ link.AU }}**,  
{{ link.UN }},  
*{{ link.TI }}*. {% if link.slides %}<a href="{{ link.slides  | relative_url }}">(slides), </a>{% endif %}
{% if link.abstract %}<a href="{{ link.abstract }}">(abstract)</a>{% endif %}
{% if link.TIb %}*{{ link.TIb }}*. {% endif %}{% if link.slidesb %}<a href="{{ link.slidesb  | relative_url}}">(slides), </a>{% endif %}
{% if link.abstractb %}<a href="{{ link.abstractb }}">(abstract)</a>{% endif %}
{{ link.contents }}
{% endif %}
{% endif %}

-------------------------
{% endfor %}


