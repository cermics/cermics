---
layout: page
cover-img: /assets/images-cermics/image12.jpg
---

### Cermics News

{% for item in site.news reversed %}
{% if item.invisible != "yes" %}
<details markdown="1">
<summary> {{ item.date | date : "%A, %B %-d, %Y" }},<br> <i>{{ item.title  }}</i></summary>
  {{ item.content }}
</details>
----------------------
{% endif %}
{% endfor %}
