import m, { Vnode } from 'mithril';
import { User } from './../models/user';

export const UserForm = () => {
  return {
    oninit: (vnode: Vnode<{ id: number; editing: boolean }>) =>
      vnode.attrs.editing ? User.load(vnode.attrs.id) : User.new(),
    view: (vnode: Vnode<{ id: number; editing: boolean }>) =>
      m(
        'form',
        {
          onsubmit: (e: MouseEvent) => {
            e.preventDefault();
            vnode.attrs.editing ? User.save() : User.create();
          },
        },
        [
          m('label.label', 'First name'),
          m('input.input[type=text][placeholder=First name]', {
            oninput: m.withAttr('value', (value: string) => {
              User.current.firstName = value;
            }),
            value: User.current.firstName,
          }),
          m('label.label', 'Last name'),
          m('input.input[type=text][placeholder=Last name]', {
            oninput: m.withAttr('value', (value: string) => {
              User.current.lastName = value;
            }),
            value: User.current.lastName,
          }),
          m('.inline', [
            m('button.button[type=submit]', 'Save'),
            m('button.button[type=button]', {
              onclick: () => User.delete(User.current.id),
            }, 'Delete'),
          ]),
        ]
      ),
  };
};
