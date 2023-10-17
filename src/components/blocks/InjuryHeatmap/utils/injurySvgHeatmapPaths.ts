import { Injuries } from '@/store/slices/classesSlice.ts'

type InjurySvgHeatmapPath = {
    name: keyof Injuries
    blur: number
    d: string
}

/**
 * Array of path data objects containing the name, blur, and path information for each of the **heatmap** paths in the SVG.
 * @param {string} name The name of the injury type (e.g. `bicep-l`).
 * @param {number} blur The amount of blur (in rem units) to apply to the path (e.g. `0.3`).
 * @param {string} d The path definition for the SVG's `d` attribute.
 */
export const injurySvgHeatmapPaths: InjurySvgHeatmapPath[] = [
    { name: 'abdomen',     blur: 0.25, d: 'M165.5-16.5c1.1-4.3,0.3-8.8-2-12.6c-2.4-3.8-6.1-6.4-10.4-7.3l-4.5-1c-2.1-0.5-4.3,0-5.9,1.4c-1.7,1.3-2.6,3.3-2.6,5.5h0c0-2.1-1-4.1-2.6-5.5c-1.7-1.3-3.8-1.9-5.9-1.4l-4.5,1c-4.4,1-8.1,3.6-10.4,7.3s-3.1,8.3-2,12.6c0.6,2.6,2.7,4.5,5.1,5.1C116-8,113.9-3,114.4,2.2c0.2,2.5,1.5,4.7,3.5,6.1c1.4,1,3.1,1.5,4.8,1.5c0.7,0,1.5-0.1,2.2-0.3l9.4-2.6c3.4-0.9,5.7-4,5.7-7.5h0c0,3.5,2.4,6.6,5.7,7.5l9.4,2.6c0.7,0.2,1.5,0.3,2.2,0.3c1.7,0,3.3-0.5,4.8-1.5c2-1.4,3.3-3.6,3.5-6.1C166.1-3,164-8,160.4-11.5C162.8-12.1,164.9-13.9,165.5-16.5z M137.3-15.3c-0.1-0.1-0.2-0.2-0.4-0.3c1.9-1.5,3-3.8,3-6.3h0c0,2.5,1.2,4.8,3,6.3c-0.1,0.1-0.3,0.2-0.4,0.3c-1.7,1.3-2.7,3.4-2.7,5.5C140-11.9,139-13.9,137.3-15.3z' },
    { name: 'ankle-l',     blur: 0.26, d: 'M135.8,345.9l-1.6-10.7c-0.9-5.8-6.1-9.8-11.9-9.1l-5.3,0.6l0,0c-5.6,0.7-9.8,5.6-9.5,11.2l0.5,9.8c0.2,5.2,4.5,9.2,9.6,9.2h8.7c2.8,0,5.5-1.2,7.3-3.3C135.4,351.5,136.2,348.7,135.8,345.9z' },
    { name: 'ankle-r',     blur: 0.26, d: 'M163,326.7l-5.3-0.6c-5.8-0.7-11.1,3.3-11.9,9.1l-1.6,10.7c-0.4,2.8,0.4,5.6,2.2,7.7c1.8,2.1,4.5,3.3,7.3,3.3h8.7c5.2,0,9.4-4,9.6-9.2l0.5-9.8C172.8,332.3,168.6,327.4,163,326.7z' },
    { name: 'back-lower',  blur: 0.44, d: 'M167.9,12.8c-3.1-7.4-13-11.5-27.9-11.5c-14.9,0-24.8,4.1-27.9,11.5c-1.3,3.1-2.3,9.5,5.3,17.1c2.8,2.8,2.9,4.7,3,7.3c0.6,10.6,7.4,12.7,19.6,12.7c12.2,0,18.9-2,19.6-12.7c0.2-2.6,0.3-4.5,3-7.3C170.2,22.3,169.2,15.9,167.9,12.8z' },
    { name: 'back-upper',  blur: 0.41, d: 'M170.5-122.2c-4.8-6.2-14.2-9-30.5-9c-16.3,0-25.7,2.8-30.5,9c-2.2,2.8-4.4,7.7-2.5,15.2c0.2,0.7,0.3,1.4,0.5,2c1.4,5.9,2.7,10.9,8.7,13.7c4.5,2.1,11,2.3,23.8,2.3c12.8,0,19.3-0.2,23.8-2.3c6-2.7,7.2-7.8,8.7-13.7c0.2-0.6,0.3-1.3,0.5-2C174.9-114.5,172.7-119.4,170.5-122.2z' },
    { name: 'bicep-l',     blur: 0.3,  d: 'M77.8-73.8l-1.9-4c-1-2-2.8-3.5-5-4.1s-4.5-0.2-6.4,1l-3.7,2.5c-0.1,0.1-0.3,0.1-0.4,0l-1.8-0.9c-2.5-1.3-5.4-1.1-7.7,0.6c-2.3,1.6-3.4,4.4-2.9,7.1h0c0.1,0.8,0.2,1.7,0.2,2.5l-0.3,25.6c0,3.6,1.5,7,4.3,9.3l1.5,1.3c2.1,1.7,4.7,2.6,7.3,2.6c1.3,0,2.7-0.2,3.9-0.7l4-1.5C75.5-34.9,80-41.3,80-48.4v-15.9C80-67.6,79.2-70.9,77.8-73.8z' },
    { name: 'bicep-r',     blur: 0.3,  d: 'M231.8-69.1c0-0.8,0.1-1.7,0.2-2.5c0.5-2.8-0.6-5.5-2.9-7.1c-2.3-1.6-5.2-1.9-7.7-0.6l-1.8,0.9c-0.1,0.1-0.3,0.1-0.4,0l-3.7-2.5c-1.9-1.3-4.2-1.6-6.4-1c-2.2,0.6-4,2.1-5,4.1l-1.9,4c-1.4,3-2.2,6.3-2.2,9.5v15.9c0,7.1,4.5,13.5,11.1,15.9l4,1.5c1.3,0.5,2.6,0.7,3.9,0.7c2.6,0,5.2-0.9,7.3-2.6l1.5-1.3c2.8-2.3,4.3-5.7,4.3-9.3L231.8-69.1z' },
    { name: 'calf-l',      blur: 0.26, d: 'M138.8,272.8l-5.2-33.4c-0.7-4.2-4.2-7.3-8.5-7.3c-4.1,0-7.6,2.9-8.4,6.8l-4.8,23.1c-1,4.7-1,9.5-0.1,14.2l3.5,18.1c0.5,2.5,1.9,4.7,4,6.1c1.6,1,3.3,1.6,5.1,1.6c0.7,0,1.4-0.1,2-0.2l1.5-0.3c3.4-0.7,6-3.2,7-6.5l3.2-10.9C139.2,280.5,139.4,276.6,138.8,272.8z' },
    { name: 'calf-r',      blur: 0.26, d: 'M168.2,262.1l-4.8-23.1c-0.8-4-4.4-6.8-8.4-6.8c-4.3,0-7.8,3.1-8.5,7.3l-5.2,33.4c-0.6,3.7-0.3,7.7,0.7,11.3l3.2,10.9c1,3.3,3.6,5.8,7,6.5l1.5,0.3c0.7,0.1,1.4,0.2,2,0.2c1.8,0,3.6-0.5,5.1-1.6c2.1-1.4,3.6-3.6,4-6.1l3.5-18.1C169.2,271.6,169.1,266.8,168.2,262.1z' },
    { name: 'chest-l',     blur: 0.46, d: 'M121.2-98.5l-1.2,0c-1.4,0-3.3-3.6-4.1-10.1c-0.8-7.1-7-12.4-14.1-12c-6.5,0.3-12.3,1.9-17.8,4.7c-7.9,4.1-13.1,10.9-14.8,19.2c-1.3,6.5-0.3,13.4,2.4,16.8l8.6,10.4l0.2,0.2c4.7,5.2,8.8,9.1,15.6,9.1c1.6,0,3.3-0.2,5.2-0.6c5.2-1.2,18.3-4,26.1-5.7l4.3-0.9c6-1.3,11.5-3.8,11.5-13.1v-3.5C143-98.2,130.9-98.4,121.2-98.5z' },
    { name: 'chest-r',     blur: 0.46, d: 'M210.9-96.7c-1.7-8.3-7-15.2-14.8-19.2c-5.5-2.8-11.3-4.4-17.8-4.7c-7.1-0.3-13.3,4.9-14.1,12c-0.8,6.5-2.7,10.1-4.1,10.1l-1.2,0c-9.7,0.1-21.8,0.3-21.8,14.4v3.5c0,9.4,5.5,11.8,11.5,13.1l4.4,0.9c7.8,1.7,20.9,4.5,26.1,5.7c1.9,0.4,3.6,0.6,5.2,0.6c6.8,0,10.9-3.9,15.6-9.1l8.7-10.6C211.2-83.3,212.2-90.2,210.9-96.7z' },
    { name: 'ear-l',       blur: 0.18, d: 'M117.6-199.3c-2.9-1.9-6.7-2.1-9.9-0.6c-3.7,1.7-7,6.3-2.1,18.7c2.5,6.3,6.2,9.9,10.3,9.9c0.5,0,0.9,0,1.4-0.1c4.4-0.8,6.7-4.9,6.7-11.9C123.9-191.3,121.8-196.7,117.6-199.3z' },
    { name: 'ear-r',       blur: 0.18, d: 'M172.2-200c-3.3-1.5-7-1.2-9.9,0.6c-4.2,2.7-6.3,8-6.3,15.8c0,7.1,2.2,11.1,6.7,11.9c0.5,0.1,0.9,0.1,1.4,0.1c4.1,0,7.8-3.5,10.3-9.9C179.2-193.7,175.9-198.3,172.2-200z' },
    { name: 'elbow-l',     blur: 0.35, d: 'M79.6-13.5l-1-4.7c-0.1-0.3-0.3-1.3-0.3-1.6c0,0,0-0.3,0.4-1.1l0.2-0.6c1.1-2.8,1-6-0.4-8.8c-1.4-2.7-3.8-4.8-6.8-5.6l-12.6-3.5c-2.8-0.8-5.8-0.3-8.2,1.4c-2.4,1.7-3.8,4.3-4,7.2v0c-0.1,1.1-0.1,1.1-0.4,2.1l-2.6,8.2c-1.5,4.7,0.4,9.8,4.5,12.5l6.9,4.4c2.9,1.8,6.2,2.8,9.6,2.8c1.2,0,2.3-0.1,3.5-0.3L72-1.9c2.6-0.5,4.8-2,6.2-4.2C79.7-8.3,80.1-10.9,79.6-13.5z' },
    { name: 'elbow-r',     blur: 0.35, d: 'M236.1-20.5l-2.6-8.2c-0.3-1-0.3-1-0.4-2.1v0c-0.2-2.9-1.7-5.5-4-7.2c-2.4-1.7-5.4-2.2-8.2-1.4l-12.6,3.5c-2.9,0.8-5.4,2.9-6.8,5.6c-1.4,2.7-1.5,5.9-0.4,8.8l0.2,0.6c0.3,0.8,0.4,1,0.4,1c0,0.3-0.2,1.3-0.3,1.6l-1,4.7c-0.6,2.6-0.1,5.2,1.4,7.4c1.4,2.2,3.7,3.7,6.2,4.2l3.5,0.7c1.2,0.2,2.3,0.3,3.5,0.3c3.4,0,6.7-1,9.6-2.8l6.9-4.4C235.7-10.6,237.5-15.8,236.1-20.5z' },
    { name: 'foot-l',      blur: 0.28, d: 'M139,368.7l-0.9-11.2l-0.4-1.7c-1.1-4.5-5.1-7.7-9.8-7.7h-9.3c-4,0-7.9,1.9-10.3,5.2l-11.6,15.5c-1.8,2.4-2.1,5.6-0.8,8.3s4.1,4.4,7.1,4.4h25.8c3.9,0,7.4-2.3,8.8-6l0.7-1.7C138.8,372.2,139.1,370.4,139,368.7z' },
    { name: 'foot-r',      blur: 0.28, d: 'M183.4,368.7l-11.6-15.5h0c-2.4-3.2-6.3-5.2-10.3-5.2h-9.3c-4.6,0-8.7,3.2-9.8,7.7l-0.4,1.7l-0.9,11.2c-0.1,1.7,0.1,3.5,0.8,5.1l0.7,1.7c1.4,3.6,4.9,6,8.8,6h25.8c3,0,5.7-1.7,7.1-4.4C185.5,374.3,185.2,371.1,183.4,368.7z' },
    { name: 'forearm-l',   blur: 0.34, d: 'M78.5-1.8c-0.5-2.6-2.1-4.8-4.3-6.1c-2.3-1.3-5-1.6-7.5-0.7L64.9-8c-1.4,0.5-2.9,0.3-4.2-0.5l-3.6-2.2c-2.3-1.4-5.1-1.9-7.8-1.1c-2.6,0.7-4.8,2.5-6.1,5C40.6-1.5,39,4.1,38.6,10l-2.5,35.2c-0.3,4.8,2,9.5,6,12.1l3.8,2.4c1.6,1,3.4,1.5,5.2,1.5c1,0,2-0.2,3-0.5c2.8-0.9,4.9-2.9,6-5.6L77,13.4C78.9,8.6,79.5,3.3,78.5-1.8z' },
    { name: 'forearm-r',   blur: 0.34, d: 'M243.9,45.2L241.4,10c-0.4-5.9-2-11.6-4.7-16.8c-1.2-2.4-3.5-4.2-6.1-5c-2.6-0.7-5.5-0.3-7.8,1.1l-3.6,2.2c-1.3,0.8-2.8,1-4.2,0.5l-1.8-0.6c-2.5-0.9-5.2-0.6-7.5,0.7c-2.3,1.3-3.8,3.5-4.3,6.1c-0.9,5.1-0.4,10.4,1.5,15.2l16.9,41.7c1.1,2.7,3.3,4.7,6,5.6c1,0.3,2,0.5,3,0.5c1.8,0,3.6-0.5,5.2-1.5l3.8-2.4C242,54.7,244.3,50,243.9,45.2z' },
    { name: 'groin',       blur: 0.36, d: 'M140,41c-16.9,0-35,1-35,13.3c0,9.6,20.9,23.9,35,23.9s35-14.3,35-23.9C175,42,156.9,41,140,41z' },
    { name: 'hamstring-l', blur: 0.28, d: 'M142,85.1c0.3-5.1-2.7-9.7-7.5-11.5l-11.6-4.3c-3.3-1.2-7-0.7-9.9,1.4c-2.9,2.1-4.4,5.5-4.2,9.1l3.3,48.9c0.4,5.8,0.3,11.7-0.2,17.6l-3,34.6c-0.5,6,1.3,11.9,5.2,16.6l1,1.3c2.8,3.5,6.6,6,10.9,7.3c1,0.3,1.9,0.4,2.9,0.4c2,0,4.1-0.6,5.8-1.9c2.5-1.8,4-4.7,4.1-7.8l0.2-9.2c0-1.7,0-3.5-0.1-5.2l-0.8-13.2c-0.3-4.1-0.3-8.3,0-12.5L142,85.1z' },
    { name: 'hamstring-r', blur: 0.28, d: 'M171.2,79.7c0.2-3.5-1.3-6.9-4.2-9.1c-2.9-2.1-6.5-2.6-9.9-1.4l-11.6,4.3h0c-4.8,1.8-7.8,6.4-7.5,11.5l3.9,71.4c0.2,4.1,0.2,8.3,0,12.5l-0.8,13.2c-0.1,1.7-0.1,3.4-0.1,5.2l0.2,9.2c0.1,3.1,1.6,6,4.1,7.8c1.7,1.2,3.7,1.9,5.8,1.9c1,0,1.9-0.1,2.9-0.4c4.3-1.3,8.1-3.8,10.9-7.3l1-1.3c3.8-4.7,5.7-10.6,5.2-16.6l-3-34.6c-0.5-5.8-0.6-11.7-0.2-17.6L171.2,79.7z' },
    { name: 'hand-r',      blur: 0.22, d: 'M247,96.9l-1.3-16.2c-0.2-2.3-1.4-4.4-3.2-5.8c-1.9-1.4-4.2-1.8-6.5-1.3l-1.2,0.3l-0.8-0.7c-3.2-2.8-8.2-2.5-11.1,0.7l-2.3,2.6c-0.9,1-1.6,2.2-2.1,3.5l-6.9,18.9c-1.2,3.1,0.1,6.5,3.1,8.1c2.9,1.6,6.4,0.8,8.4-1.9l7.1-9.4l0.1,12.9c0,1.5-0.4,2.9-1.2,4.1l-3.1,4.9c-1.9,3-1.2,6.8,1.6,8.8c1.2,0.9,2.6,1.3,3.9,1.3c1.9,0,3.7-0.8,5-2.3l4.4-5.2c1.4-1.6,2.4-3.6,3-5.6l2.3-8.4C247,103.2,247.3,100,247,96.9z' },
    { name: 'hand-l',      blur: 0.22, d: 'M68.5,98.9l-7-18.9c-0.5-1.3-1.2-2.5-2.1-3.5l-2.3-2.6c-2.9-3.2-7.8-3.5-11.1-0.7l-0.8,0.7l-1.2-0.3c-2.3-0.5-4.6,0-6.5,1.3c-1.9,1.4-3.1,3.5-3.2,5.8L33,96.9c-0.3,3.2,0,6.3,0.9,9.3l2.3,8.4c0.6,2.1,1.6,4,3,5.6l4.4,5.2c1.3,1.5,3.1,2.3,5,2.3c1.4,0,2.7-0.4,3.9-1.3c2.8-2.1,3.5-5.9,1.6-8.8l-3.1-4.9c-0.8-1.2-1.2-2.7-1.2-4.1l0.1-12.9l7.1,9.4c2,2.6,5.5,3.4,8.4,1.9C68.3,105.4,69.6,102,68.5,98.9z' },
    { name: 'head',        blur: 0.46, d: 'M164.6-227.8c-5.9-8.3-14.9-13.1-24.6-13.1c-9.7,0-18.7,4.8-24.6,13.1c-6.5,9.1-8.2,20.7-4.6,31c6.5,18.7,9,21.7,29.1,21.7h0.1c20.1,0,22.6-3,29.1-21.7C172.8-207.2,171-218.8,164.6-227.8z' },
    { name: 'hip-l',       blur: 0.34, d: 'M127.6,40.6l-0.3-4.2c-0.2-4-2.1-7.9-5.2-10.5l-6.5-5.7c-3.3-2.9-7.5-4.3-11.9-4l-5.9,0.4c-2.9,0.2-5.5,1.6-7.1,4c-1.7,2.3-2.2,5.2-1.5,8l0,0c0,0.2,0,0.4,0,0.6l-5.5,13.9c-1.3,3.4-1.1,7.2,0.7,10.4l5.2,9.6c1.3,2.4,3.6,4.1,6.2,4.8c0.8,0.2,1.6,0.3,2.4,0.3c1.9,0,3.7-0.5,5.3-1.5l3.5-2.2c3.2-2.1,5.6-5.2,6.5-8.9l0.6-2.2c0.1-0.3,0.3-0.5,0.6-0.6l5.4-1.6C124.8,49.8,127.9,45.4,127.6,40.6z' },
    { name: 'hip-r',       blur: 0.34, d: 'M196.3,43.1l-5.5-13.9c-0.1-0.2-0.1-0.4,0-0.6c0.7-2.8,0.2-5.7-1.5-8c-1.7-2.3-4.3-3.8-7.1-4l-5.9-0.4c-4.3-0.3-8.6,1.1-11.9,4l-6.5,5.7c-3,2.7-4.9,6.5-5.2,10.5l-0.3,4.2c-0.3,4.9,2.8,9.2,7.4,10.6l5.4,1.6c0.3,0.1,0.5,0.3,0.6,0.6l0.6,2.2c1,3.7,3.3,6.9,6.5,8.9l3.5,2.2c1.6,1,3.4,1.5,5.3,1.5c0.8,0,1.6-0.1,2.4-0.3c2.6-0.7,4.9-2.4,6.2-4.8l5.2-9.6C197.4,50.3,197.6,46.5,196.3,43.1z' },
    { name: 'jaw',         blur: 0.32, d: 'M164.1-177.6c-3.5-6.3-12.6-6.8-24.1-6.8c-11.5,0-20.6,0.5-24.1,6.8c-3.1,5.7,0.3,12.1,3.8,17.7c5,7.9,11,11.3,20.3,11.3c9.2,0,15.3-3.4,20.3-11.3C163.7-165.5,167.2-171.9,164.1-177.6z' },
    { name: 'knee-l',      blur: 0.34, d: 'M131.6,198.4l-8.8-2.1c-4.1-1-8.4-1-12.4,0l-9,2.1c-4.6,1.1-7.8,5.2-7.8,9.9c0,3.5,0.5,7,1.5,10.4l1,3.2c0.4,1.4,0.6,2.9,0.4,4.3c-0.7,5.5,2.9,10.5,8.2,11.7l10.6,2.3c1.4,0.3,2.8,0.5,4.2,0.5c1.3,0,2.6-0.1,3.9-0.4l2.7-0.6c3.6-0.7,6.5-3.2,8-6.5l3.6-8.3c1-2.4,1.6-4.9,1.7-7.5l0.3-8.7C139.6,203.9,136.3,199.6,131.6,198.4z' },
    { name: 'knee-r',      blur: 0.34, d: 'M178.6,198.5l-9-2.1c-4.1-1-8.4-1-12.4,0l-8.8,2.1c-4.7,1.1-8,5.5-7.9,10.3l0.3,8.7c0.1,2.6,0.6,5.1,1.7,7.5l3.6,8.3c1.4,3.3,4.4,5.8,8,6.5l2.7,0.6c1.3,0.3,2.6,0.4,3.9,0.4c1.4,0,2.8-0.2,4.2-0.5l10.6-2.3c5.4-1.2,8.9-6.2,8.2-11.7c-0.2-1.5-0.1-2.9,0.4-4.3l1-3.2c1-3.4,1.5-6.9,1.5-10.4C186.5,203.7,183.2,199.6,178.6,198.5z' },
    { name: 'neck',        blur: 0.28, d: 'M163.2-144.5c-0.2-1.9-0.2-3.5-0.3-4.6c-0.2-3.7-0.4-7.1-4.1-8.8c-3.6-1.6-6.4,0.6-7.4,1.5c-1.5,1.2-4.3,3.4-11.4,3.4c-7.1,0-9.9-2.2-11.4-3.4c-1.1-0.8-3.9-3.1-7.4-1.5c-3.7,1.6-3.9,5.1-4.1,8.8c-0.1,1.2-0.2,2.7-0.3,4.6c-0.4,5.7-0.6,12.2,3.9,17.1c3.8,4.1,9.7,5.9,19.3,5.9c9.6,0,15.5-1.8,19.3-5.9C163.8-132.2,163.7-138.8,163.2-144.5z' },
    { name: 'quad-l',      blur: 0.32, d: 'M120.3,146.7c0.6-5.8,0.7-11.7,0.3-17.6l-3-50.8c-0.2-3.6-1.9-7-4.7-9.3c-2.8-2.3-6.5-3.3-10-2.8l-12.6,1.8c-6.7,1-11.5,6.8-11.3,13.6l2.4,63.6c0.3,8.9,2.1,17.7,5.2,26.2l4.7,12.8c1.1,2.9,1.6,6,1.6,9.1v3.9c0,2.9,1.3,5.6,3.5,7.4c1.7,1.4,3.8,2.1,5.9,2.1c0.7,0,1.4-0.1,2.1-0.2l6.8-1.5c5-1.1,8.2-6,7.2-11l-0.3-1.4c-0.9-4.8-1.2-9.8-0.7-14.7L120.3,146.7z' },
    { name: 'quad-r',      blur: 0.32, d: 'M189.9,68.2l-12.6-1.8c-3.6-0.5-7.2,0.5-10,2.8c-2.8,2.3-4.5,5.6-4.7,9.3l-3,50.8c-0.4,5.8-0.2,11.8,0.3,17.6l3,31.2c0.5,4.9,0.2,9.9-0.7,14.7l-0.3,1.4c-1,5.1,2.2,9.9,7.2,11l6.8,1.5c0.7,0.2,1.4,0.2,2.1,0.2c2.1,0,4.2-0.7,5.9-2.1c2.3-1.8,3.5-4.5,3.5-7.4v-3.9c0-3.1,0.5-6.2,1.6-9.1l4.7-12.8c3.1-8.4,4.8-17.2,5.2-26.2l2.4-63.6C201.4,75,196.6,69.1,189.9,68.2z' },
    { name: 'ribs-l',      blur: 0.55, d: 'M139.3-69.1c-2.4-1.9-5.4-2.6-8.4-1.9l-38.3,8.8c-2.6-1.3-5.6-1.2-8.1,0.2c-2.6,1.5-4.1,4.2-4.1,7.2v3.1c0,9.4,0.9,18.8,2.7,28.1l4.2,21.8c1,5.4,5.7,9.2,11,9.2c0.4,0,0.8,0,1.2-0.1l4.8-0.5c4.8-0.5,8.6-4,9.6-8.8l3.6-18.3c0.9-4.7,4.3-8.6,8.8-10.1l9.2-3.2c4.5-1.6,7.5-5.8,7.5-10.6v-17C143-64.4,141.6-67.2,139.3-69.1z' },
    { name: 'ribs-r',      blur: 0.55, d: 'M195.4-62c-2.5-1.5-5.5-1.6-8.1-0.2L149.1-71c-3-0.7-6,0-8.4,1.9c-2.4,1.9-3.7,4.7-3.7,7.7v17c0,4.8,3,9,7.5,10.6l9.2,3.2c4.5,1.6,7.9,5.5,8.8,10.1L166-2c0.9,4.7,4.8,8.3,9.6,8.8l4.8,0.5c0.4,0,0.8,0.1,1.2,0.1c5.4,0,10-3.8,11-9.2l4.2-21.8c1.8-9.2,2.7-18.7,2.7-28.1v-3.1C199.5-57.8,198-60.5,195.4-62z' },
    { name: 'shin-l',      blur: 0.26, d: 'M127.8,302c-1.7-2.4-2.9-5.1-3.6-8.1l-4.2-19.3c-0.8-3.5-0.8-7-0.2-10.5l3.6-19.9c1.2-6.4-2.9-12.7-9.3-14.2l-4.1-1c-3.4-0.8-7-0.1-9.9,1.8c-2.9,2-4.8,5.1-5.2,8.6l-1.6,12.7c-0.4,3.1-0.3,6.3,0.3,9.4l12.9,65.3c1,5.2,5.7,8.9,10.8,8.9c0.6,0,1.3-0.1,2-0.2l4.4-0.8c5.8-1.1,10-6.1,10-12v-1.8C133.8,314.1,131.7,307.5,127.8,302z' },
    { name: 'shin-r',      blur: 0.26, d: 'M186.6,252.2l-1.6-12.7c-0.4-3.5-2.3-6.6-5.2-8.6c-2.9-2-6.5-2.7-9.9-1.8l-4.1,1c-6.4,1.5-10.4,7.8-9.3,14.2l3.6,19.9c0.6,3.5,0.6,7-0.2,10.5l-4.2,19.3c-0.6,2.9-1.8,5.6-3.6,8.1c-4,5.6-6.1,12.1-6.1,19v1.8c0,5.9,4.2,11,10,12l4.4,0.8c0.7,0.1,1.3,0.2,2,0.2c5.1,0,9.8-3.7,10.8-8.9l12.9-65.3C186.9,258.4,187,255.3,186.6,252.2z' },
    { name: 'shoulder-l',  blur: 0.28, d: 'M234.3-93.2l-6.4-13.9c-1.6-3.4-4.1-6.2-7.4-8l-9.3-5.2c-2.6-1.4-5.6-1.8-8.4-0.9c-2.9,0.8-5.2,2.8-6.6,5.4c-2.2,4.2-1.2,9.4,2.5,12.4l0.9,0.8c2.5,4.1,3.5,9,2.9,13.8c-0.3,2,0.1,3.9,1,5.7l2.6,4.8c1.5,2.8,4,5,7,6.2l2.1,0.8c1.7,0.7,3.5,1,5.3,1c2.3,0,4.7-0.5,6.8-1.6c3.8-1.9,6.5-5.4,7.6-9.4l0.4-1.4C236.1-86.3,235.7-90,234.3-93.2z' },
    { name: 'shoulder-r',  blur: 0.28, d: 'M83.8-115.9c-1.4-2.6-3.7-4.5-6.6-5.4c-2.8-0.8-5.9-0.5-8.4,0.9l-9.3,5.2c-3.3,1.8-5.9,4.6-7.4,8l-6.4,13.9l0,0c-1.5,3.2-1.8,6.8-0.9,10.3l0.4,1.4c1.1,4.1,3.9,7.5,7.6,9.4c2.1,1.1,4.4,1.6,6.8,1.6c1.8,0,3.6-0.3,5.3-1l2.1-0.8c3-1.1,5.5-3.3,7-6.2l2.6-4.8c0.9-1.8,1.3-3.7,1-5.7c-0.6-4.8,0.4-9.7,2.9-13.8l0.9-0.8C85-106.5,86.1-111.6,83.8-115.9z' },
    { name: 'wrist-l',     blur: 0.23, d: 'M56.5,64.8c1.7-4.9-0.8-10.3-5.7-12.1l-3.5-1.3h0c-2.4-0.9-5.1-0.7-7.3,0.6c-2.2,1.2-3.9,3.4-4.4,5.9l-1.2,5.5c-0.6,2.7-0.7,5.4-0.3,8.1l0.6,3.6c0.4,2.7,1.9,5,4.2,6.5c1.6,1.1,3.4,1.6,5.3,1.6c0.8,0,1.6-0.1,2.3-0.3l2.4-0.6c2.7-0.7,4.9-2.4,6.1-4.9c1.2-2.4,1.3-5.3,0.3-7.8c-0.1-0.3-0.1-0.7,0-1L56.5,64.8z' },
    { name: 'wrist-r',     blur: 0.23, d: 'M245.7,63.4l-1.2-5.5c-0.6-2.5-2.2-4.6-4.4-5.9c-2.2-1.2-4.9-1.4-7.3-0.6l-3.5,1.3c-4.9,1.8-7.4,7.2-5.7,12.1l1.4,3.9c0.1,0.3,0.1,0.7,0,1c-1.1,2.5-1,5.4,0.3,7.8c1.2,2.4,3.4,4.2,6.1,4.9l2.4,0.6c0.8,0.2,1.5,0.3,2.3,0.3c1.9,0,3.7-0.5,5.3-1.6c2.2-1.5,3.8-3.9,4.2-6.5l0.6-3.6C246.4,68.8,246.3,66.1,245.7,63.4z' }
]