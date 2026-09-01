---
layout: page
cover-img: /assets/images/coriolis3.jpg
---

### Modeling, Analysis and Simulation Team

The scientific topics of the team "Modeling, Analysis and Simulation" focus on
the mathematical study, numerical analysis and simulation of equations from
physics and mechanics. Application domains include

  * Molecular and multiscale simulation 
	with in particular the coupling between
	models at the microscopic scale (quantum and statistical physics) and models
	at the macroscopic scale. A broad range of mathematical tools are used:
	analysis of partial differential equations, spectral analysis, stochastic
	processes, variational methods, etc.
	
  * Fluid and solid mechanics 
	for which mathematical models and numerical
    methods at a more macroscopic scale are developed. The research efforts are
    for instance directed towards finite element methods, discontinuous Galerkin
    techniques, hybrid high-order (HHO) methods, a posteriori error estimates
    and unfitted mesh techniques for interface problems.  PDEs and materials,
    with in particular the study of dislocation dynamics and free surface
    problems.  The control and stabilization of partial differential equations.

#### Team Leader: 

{% assign team = "MAS" %}{% assign function = "Team Leader" %}
{% assign position = "Researcher" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

#### Permanent members: 

{% assign function = "" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}


#### Postdoctoral fellows:

{% assign position = "Postdoctoral fellow" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

#### PhD Students:

{% assign position = "PhD Student" %}
{% for staff_member in site.staff_members %}{% include staff.html %}{% endfor %}

