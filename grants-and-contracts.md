---
layout: page
cover-img: /assets/images/coriolis5.jpg
---

## Grants and Contracts 

You can find here the links to the websites associated with some representative grants and contracts:

{% for item in site.news reversed %}
{% if item.tag == "grants-and-contracts" %}
<details markdown="1" style="margin-left: 20px;">
<summary> {{ item.title }}</summary>
{% if item.content %}{{ item.content }}{% endif %}
</details>
{% endif %}
{% endfor %}

Here are links to past representative grants and contracts:

{% for item in site.news reversed %}
{% if item.tag == "grants-and-contracts-old" %}
<details markdown="1" style="margin-left: 20px;">
<summary> {{ item.title }}</summary>
{% if item.content %}{{ item.content }}{% endif %}
</details>
{% endif %}
{% endfor %}
