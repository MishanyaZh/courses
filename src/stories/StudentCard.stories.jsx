import React from 'react';

import StudentCard from '../components/CoursePlan/StatisticsCourse/StudentsList/StudentCard/StudentCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/StudentCard',
  component: StudentCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <StudentCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  // label: 'StudentCard',
  name: 'Leanne Graham',
  city: 'Gwenborough',
  email: 'Sincere@april.biz',
  phone: ' 1-770-736-8031 x56442',
  bgcolor: 'rgba(0, 172, 193, 1)',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'StudentCard',
  bgcolor: 'rgba(176, 190, 197, 0.5)',
  name: 'Leanne Graham',
  city: 'Gwenborough',
  email: 'Sincere@april.biz',
  phone: ' 1-770-736-8031 x56442',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'StudentCard',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'StudentCard',
// };
