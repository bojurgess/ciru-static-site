interface HrefLink {
    id: number;
    name: string;
    href: string;
    icon: string;
    color: string;
    tooltip: string;
}

interface ClipboardLink {
    id: number;
    name: string;
    clipboard: string;
    icon: string;
    color: string;
    tooltip: string;
}

export type Link = HrefLink | ClipboardLink;