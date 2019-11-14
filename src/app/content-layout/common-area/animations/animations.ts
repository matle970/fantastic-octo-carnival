import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'width': '60px',
      'min-width': '60px'
    })
  ),
  state('open',
    style({
      'width': '160px',
      'min-width': '160px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '60px'
    })
  ),
  state('open',
    style({
      'margin-left': '161px'
    })
  ),
  transition('close => open', animate('100ms ease-in')),
  transition('open => close', animate('110ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1
    })
  ),
  transition('close => open', animate('80ms ease-in')),
  transition('open => close', animate('90ms ease-out')),
]);
