import { animate, trigger, transition, state, style } from '@angular/animations';

export const slideFromBottomAnimation =
    trigger('animation', [
        state('in', style({
            opacity: 1,
            transform: 'translateY(0)'
        })),
        transition('void => *', [
            style({
                transform: 'translateY(200px)', opacity: 0
            }),
            animate(200)
        ])
    ]);