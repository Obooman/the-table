# The Table

This project aims to create a spreadsheet-like table application

![Screen shot of the application](./ScreenShot.png)

Now it support following features:

- Value Input and edit
- Multiple column sort
- Cell editing
- Cell calculating
  - numbers, hex, octal numbers
  - addition / subtraction / multiplication / divide / rest
  - functions, like `SUM([n1,n2,n3])`, `AVG([n1,n2,n3])`,`PI()`
  - nested expression, brackets

also it support:

- Big table supported( reuse dom element to display data )
- keyboard navigation

---

## Get Started

```bash
$ git clone https://github.com/Obooman/the-table.git
$ cd the-table && yarn
$ yarn start # will open in :3000
```

## Todo List

- [x] Test cases for calculation functions
- [x] Test cases for stringCalc
- [x] model update logic
- [x] Editing Cell component
- [x] Sorter design
- [x] model data rendering
- [x] Infinite Grid component
- [x] Compose application
- [x] Deploy for github pages

## Known issues

- [x] InfiniteGrid end panel issue
