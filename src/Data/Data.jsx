import html from "../assets/image/html.jpeg";
import css from "../assets/image/css.png";
import js from "../assets/image/js.png";
import access from "../assets/image/access.png";

export const Data = [
  {
    subject: "HTML",
    img: html,
    qna: [
      {
        question: "Which HTML element is used to create a hyperlink?",
        Ans: [
          {
            ans: "<link>",
            correct: false,
          },
          {
            ans: "<hyper>",
            correct: false,
          },
          {
            ans: "<a>",
            correct: true,
          },
          {
            ans: "<url>",
            correct: false,
          },
        ],
      },
      {
        question: "What is the correct HTML for creating a checkbox?",
        Ans: [
          {
            ans: '<input type="checkbox">',
            correct: true,
          },
          {
            ans: "<checkbox>",
            correct: false,
          },
          {
            ans: "<check>",
            correct: false,
          },
          {
            ans: "<box>",
            correct: false,
          },
        ],
      },
      {
        question: "Which HTML tag is used to define a table row?",
        Ans: [
          {
            ans: "<td>",
            correct: false,
          },
          {
            ans: "<tr>",
            correct: true,
          },
          {
            ans: "<table>",
            correct: false,
          },
          {
            ans: "<th>",
            correct: false,
          },
        ],
      },
      {
        question: "What does the HTML tag <em> do?",
        Ans: [
          {
            ans: "Defines emphasized text",
            correct: true,
          },
          {
            ans: "Defines a paragraph",
            correct: false,
          },
          {
            ans: " Defines a line break",
            correct: false,
          },
          {
            ans: " Defines a link",
            correct: false,
          },
        ],
      },
      {
        question: "What does the HTML tag <br> do?",
        Ans: [
          {
            ans: " Defines a line break",
            correct: true,
          },
          {
            ans: "Defines a bold text",
            correct: false,
          },
          {
            ans: "Defines a paragraph",
            correct: false,
          },
          {
            ans: "Defines a link",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    subject: "CSS",
    img: css,
  },
  {
    subject: "Javascript",
    img: js,
  },
  {
    subject: "Accessibility",
    img: access,
  },
];
