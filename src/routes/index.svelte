<script context="module">
    import dayjs from 'dayjs';
    import { base } from '$app/paths';

    const year = dayjs().year();

    export async function load() {
        return {
            status: 302,
            redirect: `${base}/ps/hk/${year}`
        };
    }
</script>

<a class="hidden" href="/yearlist">Hidden yearlist to trick build process to prerender all pages</a>