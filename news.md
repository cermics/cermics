---
layout: page
cover-img: /assets/images/coriolis.jpg
---

### Cermics News

{% for item in site.news reversed %}
<details markdown="1">
<summary> {{ item.date | date : "%A, %B %-d, %Y" }},<br> <i>{{ item.title  }}</i></summary>
  {{ item.content }}
</details>

----------------------
{% endfor %}
