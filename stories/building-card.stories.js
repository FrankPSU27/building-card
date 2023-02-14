import { html } from 'lit';
import '../src/building-card.js';

export default {
  title: 'BuildingCard',
  component: 'building-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <building-card
      style="--building-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </building-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
