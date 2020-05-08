<script>
    import {state,getUserInfo} from '../store';
    import { onMount } from 'svelte';
    export let user = state.user;

    
   onMount(async () => await getUserInfo());

</script>


<div>
    {#if ($user !== undefined)}
	    <slot name="authenticated">Welcome to the show</slot>
    {:else}
        <slot name="noauth">Sorry charlie</slot>
    {/if}
</div>