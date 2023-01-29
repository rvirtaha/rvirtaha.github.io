# My CV
This page is built using React and pure CSS. It scales quite well on different size displays, but it is otherwise built quite quickly. Mostly the translations should be refactored completely.

# What I would write differently
## Refactor the expanding-item and ContentElem components entirely
The expanding item could be written using TypeScript so that it requires two children, one which is shown on the closed state and the other is expanded. The current implementation is very limiting
in terms of what can be shown on closed state.

## Move to Tailwind CSS / SCSS
Raw CSS, even when split to own modules is quite hard to keep track of, even in a small project. 

Also the Page -components should be placed side-by-side using grid instead of flexbox

## Rework the "translation system"
First of all there should be a useLanguage()-hook, which would eliminate the need of passing the language around in props or taking it from the current url.

Then, the content could perhaps be entirely decoupled from the JSX/TSX to separate JSON files, which could contain translations for all the text.

## Use Next.js
I would use Next if I were to develop this CV into a full-blown homepage / blog. If I were to make a (hiking :)) blog, I'd likely build a markdown -> JSX/TSX translation layer which would let me write blogs in .md instead of JSX/TSX 