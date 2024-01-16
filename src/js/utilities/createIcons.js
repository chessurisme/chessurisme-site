"use strict";

import { createIcons, Hourglass, Play, CircleUserRound, Menu } from 'lucide';

createIcons({
  attrs: {
    stroke: 'var(--stroke-color)'
  },

  icons: {
    // Loading Page
    Hourglass,

    // Home Page
    Menu,
    Play,
    CircleUserRound
  }
});