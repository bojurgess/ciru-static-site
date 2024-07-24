import type { Link } from "../types";
import type { PageLoad } from "./$types";

const getIcon = async (name: string, fetch: any): Promise<string> => {
    if (name === 'coe') {
        return `
            <img src="/assets/icons/png/coe.png" alt="cavoeboy's osu event logo" />
        `
    }

    return (await fetch(`/assets/icons/svg/${name}.svg`)).text();
}

const colorMap = new Map([
    ['osu', '#FF66AA'],
    ['coe', '#12120d'],
    ['discord', '#7289DA'],
    ['x', '#000'],
    ['twitch', '#6441A5'],
    ['youtube', '#FF0000'],
])

export const load: PageLoad = async ({ fetch }) => {
    const links: Link[] = [
        {
            id: 1,
            name: 'osu!',
            href: 'https://osu.ppy.sh/users/6114695',
            icon: await getIcon('osu', fetch),
            color: colorMap.get('osu') || '#000000',
            tooltip: 'ciru',
        },
        {
            id: 2,
            name: 'coe',
            href: 'https://cavoeboy.com/a/ciru',
            icon: await getIcon('coe', fetch),
            color: colorMap.get('coe') || '#000000',
            tooltip: 'ciru',
        },
        {
            id: 3,
            name: 'discord',
            clipboard: 'ciru',
            icon: await getIcon('discord', fetch),
            color: colorMap.get('discord') || '#000000',
            tooltip: 'ciru',
        },
        {
            id: 4,
            name: 'x',
            href: 'https://twitter.com/ciru_osu',
            icon: await getIcon('x', fetch),
            color: colorMap.get('x') || '#000000',
            tooltip: '@ciru_osu',
        },
        {
            id: 5,
            name: 'twitch',
            href: 'https://twitch.tv/ciruosu',
            icon: await getIcon('twitch', fetch),
            color: colorMap.get('twitch') || '#000000',
            tooltip: 'ciruosu',
        },
        {
            id: 6,
            name: 'youtube',
            href: 'https://www.youtube.com/@ciru.',
            icon: await getIcon('youtube', fetch),
            color: colorMap.get('youtube') || '#000000',
            tooltip: '/@ciru.',
        }
    ]

    return {
        links
    }
}