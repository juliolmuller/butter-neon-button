<h1 align="center">
  :butter: Butter Neon Button
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=ff14bd&label=created%20at&message=december%202022" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/butter-neon-button?label=updated%20at&labelColor=000000&color=ff14bd" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/juliolmuller/butter-neon-button?label=latest%20version&labelColor=000000&color=ff14bd" alt="Latest Version" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=ff14bd&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/butter-neon-button?labelColor=000000&color=ff14bd" alt="Project License" />
</p>

<p  align="center">
  <img src="https://user-images.githubusercontent.com/44725817/209752149-9e5a7cf9-6d7b-40da-b89f-7b49b963f42a.gif" alt="Butter Neon Button" />
</p>

This application is a combination of conceipts proposed by [@KevinPowell](https://www.youtube.com/@KevinPowell) and [@WebDevSimplified](https://www.youtube.com/@WebDevSimplified). The idea was to design a neon-like effect over a button and develop a logic to make the button run away from user cursor when it's off.

[Check out the application running!](https://juliolmuller.github.io/butter-neon-button)

## :trophy: Lessons Learned

- Neon-like effect using CSS;
- Re-applying same font color in other properties (`border-color`, `background-color`, `box-shadow`...) using the `currentColor` option in CSS;
- Glow effect using `box-shadow`, `transform` and `filter` properties;
- Rotating and changing element perspective by using `transform: perspective()`;
- Performant way to transition `box-shadow`, working with `opacity` of pseudo-elements (`::before` and `::after`);
- Working with display dimensions (`height` and `width`);
- Capturing mouse events and moving elements around using vanilla JS;

## :rocket: Technologies & Resources

- HTML
- CSS
- JavaScript's DOM API

---

:star2: Feel free to submit pull requests to improve this project.
