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
