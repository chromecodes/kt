let cnt = document.querySelector(".pagesCnt");
let wraps = cnt.querySelectorAll(".exp");
let selected = 0;
const expand = (e) => {
  let ind = e.target.dataset.index;
  let exps = document.querySelector(`.v${ind}`);
  exps.classList.toggle("expand");
};

let checksAll = document.querySelector(".checkAll");
let checkwrap = document.querySelector(".c1");
let checks = checkwrap.querySelectorAll("input");

const updateSelected = () => {
  let count = document.querySelector(".count");
  count.textContent = selected;
};

const selectAll = () => {
  checks.forEach((check) => {
    check.checked = !check.checked;
  });
  if (selected === 4) selected = 0;
  else selected = 4;
  updateSelected();
};
const checkUp = (e) => {
  if (e.checked) selected++;
  else selected--;
  updateSelected();
};

wraps.forEach((wrap) => wrap.addEventListener("click", (e) => expand(e)));

checksAll.addEventListener("click", selectAll);
checks.forEach((check) =>
  check.addEventListener("click", (e) => {
    checkUp(e.target);
  })
);
