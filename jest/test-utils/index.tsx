import type { FC, PropsWithChildren } from 'react';
import * as React from 'react';
import {
    render,
    renderHook,
    RenderHookOptions,
    RenderHookResult,
    RenderOptions,
    RenderResult,
} from '@testing-library/react';
import userEvent, {
    PointerEventsCheckLevel,
} from '@testing-library/user-event';
import { type UserEvent } from '@testing-library/user-event/setup/setup';
import { BreweryProvider } from '~/providers/BreweryProvider';
import config from '~/tamagui.config';
import { TamaguiProvider } from 'tamagui';
import { LikeProvider } from '~/providers/LikeProvider';
import { BreweriesProvider } from '~/providers/BreweriesProvider';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => (
    <TamaguiProvider config={config}>
        <LikeProvider>
            <BreweriesProvider>
                <BreweryProvider>
                    {children}
                </BreweryProvider>
            </BreweriesProvider>
        </LikeProvider>
    </TamaguiProvider>
);

const customRender = (
    ui: Parameters<typeof render>[0],
    options?: RenderOptions,
): RenderResult & { user: UserEvent } => ({
    user: userEvent.setup({ pointerEventsCheck: PointerEventsCheckLevel.Never }),
    ...render(ui, {
        wrapper: AllTheProviders,
        ...options,
    }),
});

const customRenderHook = <Result, Props>(
    callback: Parameters<typeof renderHook<Result, Props>>[0],
    options?: RenderHookOptions<Props>,
): RenderHookResult<Result, Props> =>
    renderHook(callback, {
        wrapper: AllTheProviders,
        ...options,
    });

export * from '@testing-library/react';
export { customRender as render };
export { customRenderHook as renderHook };