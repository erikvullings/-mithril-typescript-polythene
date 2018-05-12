import m, { Vnode } from 'mithril';
import { User } from './../models/user';

export const UserList = (vnode: Vnode) => ({
  oncreate: User.loadList,
  view: () =>
    m('.user-list', [
      User.list.map((user) =>
        m(
          'a.user-list-item',
          {
            href: '/edit/' + user.id,
            oncreate: m.route.link,
          },
          `${user.firstName} ${user.lastName}`
        )
      ),
      ,
      m('button.button[type=button]', { href: '/create', oncreate: m.route.link }, 'New user'),
    ]),
});
