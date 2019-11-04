# MeetSync

## Development
To run the project, you need node.js installed, which you can get [here](https://nodejs.org/en/).

To get started:
```
git clone https://github.com/dsc-umass/meetsync.git
cd meetsync
npm install
```

From here, you can run
```
npm run dev
```

Then open
`http://localhost:3000`
to get the localhost development server.

## Code Structure
Individual webpages are stored in the /pages. Next.js automatically handles adding a page and url when creating a file in that directory. 

The individual non-page react components are in the /components folder. Currently, the only thing there is the layout and navbar. The layout component is shared between the different pages, and holds the navbar (and footer), which allows any change to those components to propagate through to all pages.

In terms of styling, we're using Bootstrap 4 and sass, which has the default stylesheet, colors, and fonts in the main directory. It's imported into the website in the layout component.

Static content (images and such) should be added in the /public directory.