This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Redux-saga
redux-saga est une bibliothèque qui vise à rendre les effets secondaires de l’application (c’est-à-dire des choses asynchrones comme la récupération de données et impures choses comme l’accès au cache du navigateur) plus facile à gérer, plus efficace à exécuter, facile à tester, et mieux à gérer les échecs.

Le modèle mental est qu’une saga est comme un fil distinct dans votre application qui est seul responsable des effets secondaires. redux-saga est un middleware redux, ce qui signifie que ce thread peut être démarré, mis en pause et annulé de l’application principale avec des actions redux normales, il a accès à l’état d’application redux complet et il peut envoyer des actions redux ainsi.
Il utilise une fonction ES6 appelée Generators pour rendre ces flux asynchrones faciles à lire, à écrire et à tester.
