import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Menus',
    main: [
      {
        state: 'default',
        short_label: 'Settings',
        name: 'Settings',
        type: 'sub',
        icon: 'icon-layout-cta-right',
        children: [
          {
            state: 'default',
            name: 'Calls'
          },
          {
              state: 'default',
            name: 'Management'
          },
          {
              state: 'default',
              name: 'Configure'
          },
          {
              state: 'default',
            name: 'CallsLogs',
            badge: [
              {
                type: 'info',
                value: 'NEW'
              }
            ]
          },
          {
            state: 'default',
            name: 'Queue'
          }
        ]
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'CrmCharts',
          type: 'sub',
          icon: 'icon-layout-cta-right'
      },
      {
        state: 'widget',
        short_label: 'W',
        name: 'Reporting',
        type: 'sub',
        icon: 'icon-view-grid',
        badge: [
          {
            type: 'danger',
            value: 'Charts'
          }
        ],
        children: [
          {
            state: 'default',
            name: 'Reports'
          },
          {
            state: 'default',
            name: 'Search'
          },
          {
              state: 'default',
              name: 'CdrReports'
          },
          {
              state: 'default',
              name: 'Exports'
          }
        ]
      }
    ],
  },
  {
    label: 'cPanel',
    main: [
      {
        state: 'cPanel',
        short_label: 'B',
        name: 'cPanel',
        type: 'sub',
        icon: 'icon-layout-grid2-alt',
        children: [
          {
                state: 'default',
            name: 'Users'
          },
          {
              state: 'default',
              name: 'IdmServer'
          },
          {
              state: 'default',
            name: 'Reports'
          },
          {
              state: 'default',
            name:  'Security'
          },
          {
              state: 'default',
              name:  'UserLogs'
          },
          {
              state: 'default',
              name: 'Wedgits'
          }
        ]
      },
      {
        state: 'default',
        short_label: 'A',
        name: 'Issabel',
        type: 'sub',
        icon: 'icon-crown',
        children: [
          {
                state: 'default',
            name: 'Call'
          },
          {
              state: 'default',
            name: 'Logs'
          },
          {
              state: 'default',
              name: 'Forward'
          },
          {
              state: 'default',
            name: 'Rejected'
          },
          {
              state: 'default',
              name: 'Push Notification'
          },
          /*{
            state: 'notify',
            name: 'PNOTIFY',
            badge: [
              {
                type: 'info',
                value: 'New'
              }
            ]
          },*/
          
        ]
      }
    ]
  },
  {
    label: 'RestfulServices',
    main: [
      {
        state: 'APM',
        short_label: 'F',
        name: 'APM',
        type: 'sub',
        icon: 'icon-layers',
        children: [
          {
                state: 'default',
                name: 'DBMonitoring'
          }, {
                state: 'default',
                name: 'Services'
          }, {
                state: 'default',
                name: 'Syncope'
          }, {
                state: 'default',
                name: 'History'
          }
        ]
      }
    ]
  },


];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
