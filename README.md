# cal-heatmap-react-starter

This template should help get you started implementing and using Cal-Heatmap with React (using Next.js framework)

## Install

### By cloning the current repo

Clone this git repo

`git clone git@github.com:wa0x6e/cal-heatmap-react-starter.git`

Inside the newly cloned repo, install all the dependencies

`npm install`

Start the app

`npm run dev`

You should see a very basic cal-heatmap calendar on the homepage

### Using `npx create-next-app`

Create a new project using `create-next-app`

`npx create-next-app`

Follow all the on-screen instructions, then add `cal-heatmap` with

`npm install cal-heatmap`

Create the file `src/components/cal-heatmap.tsx`, with the following content

```
import CalHeatmap from 'cal-heatmap';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import 'cal-heatmap/cal-heatmap.css';

export default function Cal() {
  if (process.browser) {
    const cal = new CalHeatmap();
    cal.paint({ theme: 'dark' }, [[Tooltip]]);
  }

  return <div id="cal-heatmap"></div>;
}
```

In the page you want to display the calendar, import the component

```
import Cal from '../components/cal-heatmap'; // Adjust the path depending on your page
```

Then display it with

```
<Cal />
```

Start your app

`npm run dev`
