---
layout: page
cover-img: /assets/images-cermics/image12.jpg
---


### Latest News

{% assign latest_news = site.news | where_exp: "item", "item.invisible != 'yes'" | reverse %}
{% for item in latest_news limit: 5 %}
<details markdown="1">
<summary> {{ item.date | date : "%A, %B %-d, %Y" }},<br> <i>{{ item.title  }}</i></summary>
  {{ item.content }}
</details>
----------------------
{% endfor %}

### Older News

{% assign latest_news = site.news | where_exp: "item", "item.invisible != 'yes'" | reverse %}
{% for item in latest_news offset: 5 %}
<details markdown="1">
<summary> {{ item.date | date : "%A, %B %-d, %Y" }},<br> <i>{{ item.title  }}</i></summary>
  {{ item.content }}
</details>
----------------------
{% endfor %}
