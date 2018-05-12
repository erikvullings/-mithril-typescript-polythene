import m, { Vnode } from 'mithril';

export const Layout = () => ({
  view: (vnode: Vnode) => m('main.layout', [
    m('nav.menu', [
      m(
        'a[href="/list"]',
        {
          oncreate: m.route.link,
        },
        'Users'
      ),
      m('section', vnode.children),
    ]),
  ]),
});
