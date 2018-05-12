import m, { RouteDefs, Vnode } from 'mithril';
import './styles.css';
import { Layout } from './views/layout';
import { UserForm } from './views/user-form';
import { UserList } from './views/user-list';

const routingTable: RouteDefs = {
  '/create': {
    render: (vnode: Vnode<{ id: number; editing: boolean }>) =>
      m(Layout, m(UserForm, { ...vnode.attrs, editing: false })),
  },
  '/edit/:id': {
    render: (vnode: Vnode<{ id: number; editing: boolean }>) =>
      m(Layout, m(UserForm, { ...vnode.attrs, editing: true })),
  },
  '/list': {
    render: () => m(Layout, m(UserList)),
  },
};

m.route(document.body, '/list', routingTable);
