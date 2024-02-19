import React from 'react'

export default function ErrorPage() {
    return (
        <div className='flex h-[80vh] w-full items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 100 100">
                    <path fill="#c7ede6" d="M88.346,56.672c0.3-0.616,0.566-1.264,0.796-1.943c2.633-7.77-1.349-17.078-9.733-19.325c-0.906-11.384-8.906-19.193-17.941-20.526c-10.341-1.525-19.814,5.044-22.966,15.485c-3.799-1.346-7.501-1.182-10.99,0.857c-1.583,0.732-3.031,1.812-4.33,3.233c-1.907,2.086-3.147,4.719-3.652,7.495c-0.748,0.118-1.483,0.236-2.176,0.484c-4.04,1.449-6.589,4.431-7.288,8.923c-0.435,2.797,0.443,5.587,0.933,6.714c1.935,4.455,6.422,6.98,10.981,6.312c0.227-0.033,0.557,0.069,0.752,0.233c0.241,7.12,3.698,13.417,8.884,17.014c8.321,5.772,19.027,3.994,25.781-3.921c2.894,2.96,6.338,4.398,10.384,3.876c4.023-0.519,7.147-2.739,9.426-6.349c1.053,0.283,2.051,0.691,3.083,0.804c4.042,0.442,7.324-1.165,9.732-4.8c0.922-1.391,1.794-3.194,1.794-6.354C91.816,61.629,90.522,58.662,88.346,56.672z"></path><path fill="#fff" d="M74.036 26.387h-10.03c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.03c.276 0 .5.224.5.5S74.313 26.387 74.036 26.387zM76.917 26.387h-1.445c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.445c.276 0 .5.224.5.5S77.194 26.387 76.917 26.387zM80.972 26.387h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S81.248 26.387 80.972 26.387zM80.972 28.252h-9.616c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.616c.276 0 .5.224.5.5S81.248 28.252 80.972 28.252zM69.624 28.252h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S69.901 28.252 69.624 28.252zM67.247 28.252h-1.456c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S67.524 28.252 67.247 28.252zM76.383 24.523h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S76.66 24.523 76.383 24.523zM76.383 22.658h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S76.66 22.658 76.383 22.658zM73.115 30.117h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S73.391 30.117 73.115 30.117z"></path><path fill="#fdfcef" d="M74.705,60.381c0,0,10.616,0,10.681,0c2.452,0,4.439-1.987,4.439-4.439c0-2.139-1.513-3.924-3.527-4.344c0.023-0.187,0.039-0.377,0.039-0.57c0-2.539-2.058-4.598-4.597-4.598c-1.499,0-2.827,0.721-3.666,1.831c-0.215-2.826-2.739-5.007-5.693-4.646c-2.16,0.264-3.947,1.934-4.344,4.073c-0.127,0.686-0.114,1.352,0.013,1.977c-0.579-0.624-1.403-1.016-2.322-1.016c-1.68,0-3.052,1.308-3.16,2.961c-0.763-0.169-1.593-0.158-2.467,0.17c-1.671,0.627-2.861,2.2-2.93,3.983c-0.099,2.533,1.925,4.617,4.435,4.617c0.191,0,0.861,0,1.015,0h9.218"></path><path fill="#472b29" d="M85.386,60.881H74.705c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10.681c2.172,0,3.938-1.768,3.938-3.939c0-1.854-1.315-3.476-3.129-3.854c-0.255-0.053-0.426-0.293-0.394-0.552c0.021-0.167,0.035-0.336,0.035-0.508c0-2.26-1.838-4.098-4.098-4.098c-1.292,0-2.482,0.595-3.268,1.633c-0.125,0.165-0.342,0.237-0.539,0.178c-0.2-0.059-0.342-0.234-0.358-0.441c-0.093-1.238-0.699-2.4-1.662-3.19c-0.974-0.798-2.209-1.152-3.472-0.997c-1.946,0.238-3.556,1.746-3.913,3.669c-0.111,0.601-0.107,1.201,0.012,1.785c0.044,0.22-0.062,0.442-0.262,0.544c-0.197,0.104-0.441,0.061-0.595-0.104c-0.513-0.552-1.207-0.856-1.955-0.856c-1.4,0-2.569,1.096-2.661,2.494c-0.01,0.146-0.082,0.28-0.199,0.368c-0.116,0.088-0.266,0.117-0.408,0.088c-0.755-0.168-1.469-0.118-2.183,0.149c-1.498,0.562-2.546,1.983-2.606,3.535c-0.043,1.084,0.347,2.109,1.097,2.889c0.749,0.779,1.758,1.209,2.839,1.209h10.233c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H61.606c-1.355,0-2.62-0.538-3.56-1.516c-0.94-0.977-1.429-2.263-1.376-3.621c0.077-1.949,1.385-3.73,3.255-4.432c0.721-0.271,1.463-0.361,2.221-0.279c0.362-1.655,1.842-2.885,3.582-2.885c0.604,0,1.194,0.151,1.72,0.432c0.004-0.326,0.036-0.654,0.098-0.982c0.436-2.347,2.399-4.188,4.774-4.479c1.54-0.19,3.041,0.243,4.227,1.217c0.899,0.737,1.543,1.741,1.847,2.85c0.919-0.808,2.095-1.256,3.347-1.256c2.811,0,5.098,2.287,5.098,5.098c0,0.064-0.002,0.128-0.004,0.192c2.047,0.628,3.491,2.547,3.491,4.722C90.325,58.665,88.109,60.881,85.386,60.881z"></path><path fill="#fdfcef" d="M72.133,50.603c-1.642-0.108-3.055,1.026-3.157,2.533c-0.013,0.187-0.004,0.371,0.023,0.55c-0.317-0.358-0.786-0.6-1.324-0.636c-0.985-0.065-1.836,0.586-1.959,1.471c-0.179-0.049-0.366-0.082-0.56-0.095c-1.437-0.094-2.674,0.898-2.762,2.216"></path><path fill="#472b29" d="M62.394,56.892c-0.006,0-0.011,0-0.017-0.001c-0.138-0.009-0.242-0.128-0.232-0.266c0.094-1.391,1.34-2.455,2.823-2.455c0.067,0,0.136,0.002,0.205,0.007c0.116,0.007,0.234,0.022,0.353,0.044c0.261-0.878,1.164-1.508,2.166-1.42c0.376,0.024,0.729,0.138,1.034,0.329c0-0.004,0-0.008,0.001-0.012c0.11-1.643,1.632-2.893,3.423-2.765c0.138,0.009,0.242,0.128,0.232,0.266c-0.009,0.138-0.1,0.26-0.266,0.232c-0.066-0.004-0.133-0.006-0.199-0.006c-1.416,0-2.604,1-2.692,2.306c-0.011,0.164-0.004,0.331,0.021,0.496c0.017,0.11-0.041,0.218-0.141,0.265c-0.1,0.045-0.221,0.022-0.293-0.061c-0.29-0.326-0.7-0.522-1.154-0.553c-0.854-0.031-1.589,0.498-1.694,1.256c-0.011,0.071-0.051,0.135-0.11,0.175c-0.059,0.04-0.132,0.052-0.203,0.032c-0.171-0.046-0.343-0.075-0.511-0.087c-1.305-0.069-2.417,0.806-2.497,1.983C62.634,56.79,62.525,56.892,62.394,56.892z"></path><path fill="#fdfcef" d="M87.183,52.118c-1.543-0.727-3.327-0.213-3.985,1.15c-0.082,0.169-0.142,0.344-0.182,0.521"></path><path fill="#472b29" d="M83.016,54.039c-0.019,0-0.037-0.002-0.056-0.006c-0.134-0.031-0.219-0.165-0.188-0.3c0.044-0.194,0.111-0.387,0.2-0.572c0.717-1.486,2.657-2.051,4.317-1.27c0.125,0.06,0.179,0.208,0.12,0.333c-0.06,0.126-0.211,0.176-0.333,0.12c-1.417-0.672-3.057-0.205-3.653,1.032c-0.072,0.151-0.128,0.309-0.163,0.468C83.234,53.959,83.13,54.039,83.016,54.039z"></path><path fill="#fdfcee" d="M52.189 28.136A20.62 20.62 0 1 0 52.189 69.376A20.62 20.62 0 1 0 52.189 28.136Z"></path><path fill="#472b29" d="M52.19,70.076c-11.756,0-21.32-9.564-21.32-21.32s9.564-21.319,21.32-21.319s21.319,9.563,21.319,21.319S63.946,70.076,52.19,70.076z M52.19,28.836c-10.984,0-19.92,8.936-19.92,19.919c0,10.984,8.936,19.92,19.92,19.92c10.983,0,19.919-8.936,19.919-19.92C72.109,37.772,63.173,28.836,52.19,28.836z"></path><path fill="#ee3e54" d="M52.189 31.704A17.052 17.052 0 1 0 52.189 65.80799999999999A17.052 17.052 0 1 0 52.189 31.704Z"></path><path fill="#472b29" d="M52.19,66.208c-9.623,0-17.453-7.83-17.453-17.453s7.83-17.452,17.453-17.452s17.452,7.829,17.452,17.452S61.813,66.208,52.19,66.208z M52.19,32.104c-9.183,0-16.652,7.47-16.652,16.651c0,9.183,7.47,16.652,16.652,16.652c9.182,0,16.651-7.47,16.651-16.652C68.841,39.574,61.371,32.104,52.19,32.104z"></path><path fill="#f4989e" d="M52.211,34.34c7.612,0,14.076,4.964,16.521,11.897c-1.363-8.091-8.232-14.251-16.521-14.251s-15.158,6.16-16.521,14.251C38.135,39.305,44.599,34.34,52.211,34.34z" opacity=".41"></path><path fill="#fdfcee" d="M57.789,53.494l-4.738-4.738l4.738-4.738c0.237-0.237,0.237-0.625,0-0.862c-0.237-0.237-0.625-0.237-0.862,0l-4.738,4.738l-4.738-4.738c-0.237-0.237-0.625-0.237-0.862,0c-0.237,0.237-0.237,0.625,0,0.862l4.738,4.738l-4.738,4.738c-0.237,0.237-0.237,0.625,0,0.862c0.237,0.237,0.625,0.237,0.862,0l4.738-4.738l4.738,4.738c0.237,0.237,0.625,0.237,0.862,0C58.026,54.119,58.026,53.731,57.789,53.494z"></path><path fill="#472b29" d="M57.359,42.978c0.156,0,0.312,0.059,0.431,0.178c0.237,0.237,0.237,0.625,0,0.862l-4.738,4.738l4.738,4.738c0.237,0.237,0.237,0.625,0,0.862c-0.118,0.119-0.275,0.178-0.431,0.178s-0.312-0.059-0.431-0.178l-4.739-4.738l-4.738,4.738c-0.118,0.119-0.275,0.178-0.431,0.178s-0.312-0.059-0.431-0.178c-0.237-0.237-0.237-0.625,0-0.862l4.739-4.738l-4.739-4.738c-0.237-0.237-0.237-0.625,0-0.862c0.118-0.119,0.275-0.178,0.431-0.178s0.312,0.059,0.431,0.178l4.738,4.738l4.739-4.738C57.046,43.037,57.202,42.978,57.359,42.978 M57.359,42.228c-0.364,0-0.705,0.141-0.961,0.398l-4.208,4.208l-4.208-4.208c-0.256-0.256-0.598-0.397-0.961-0.397s-0.705,0.141-0.961,0.397c-0.53,0.53-0.53,1.392,0,1.922l4.208,4.208l-4.208,4.208c-0.53,0.53-0.53,1.392,0,1.922c0.256,0.256,0.598,0.397,0.961,0.397s0.705-0.141,0.961-0.397l4.208-4.208l4.208,4.208c0.256,0.256,0.597,0.397,0.961,0.397s0.705-0.141,0.961-0.397c0.53-0.53,0.53-1.392,0-1.922l-4.208-4.208l4.208-4.208c0.53-0.53,0.53-1.392,0-1.922C58.063,42.369,57.722,42.228,57.359,42.228L57.359,42.228z"></path><path fill="#fdfcef" d="M39.534,70.482c1.71,0,3.194,0,3.215,0c1.916,0,3.469-1.52,3.469-3.396c0-1.636-1.182-3.001-2.756-3.323c0.018-0.143,0.031-0.288,0.031-0.436c0-1.942-1.609-3.517-3.593-3.517c-1.172,0-2.209,0.551-2.865,1.401c-0.168-2.162-2.141-3.83-4.45-3.554c-1.688,0.202-3.084,1.479-3.395,3.116c-0.1,0.525-0.089,1.034,0.01,1.512c-0.453-0.477-1.097-0.777-1.814-0.777c-1.313,0-2.385,1.001-2.47,2.265c-0.596-0.129-1.245-0.121-1.928,0.13c-1.306,0.48-2.236,1.683-2.29,3.047c-0.077,1.937,1.504,3.532,3.467,3.532c0.149,0,0.673,0,0.794,0h7.204 M33.652,70.482h0.327"></path><path fill="#472b29" d="M42.748,70.982h-3.215c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.215c1.638,0,2.97-1.299,2.97-2.896c0-1.362-0.991-2.554-2.357-2.833c-0.257-0.053-0.429-0.295-0.396-0.555c0.016-0.121,0.026-0.245,0.026-0.371c0-1.664-1.388-3.018-3.093-3.018c-0.977,0-1.877,0.44-2.47,1.207c-0.126,0.164-0.341,0.23-0.538,0.174c-0.198-0.06-0.34-0.234-0.355-0.44c-0.071-0.913-0.507-1.742-1.228-2.333c-0.743-0.609-1.688-0.876-2.664-0.764c-1.476,0.177-2.694,1.292-2.964,2.713c-0.084,0.441-0.081,0.886,0.008,1.317c0.046,0.22-0.06,0.441-0.258,0.545c-0.197,0.103-0.441,0.063-0.595-0.1c-0.379-0.4-0.895-0.621-1.451-0.621c-1.037,0-1.903,0.79-1.971,1.798c-0.01,0.146-0.082,0.279-0.198,0.366s-0.264,0.121-0.406,0.089c-0.57-0.12-1.109-0.086-1.65,0.112c-1.128,0.414-1.917,1.458-1.962,2.598c-0.031,0.781,0.253,1.525,0.799,2.095c0.568,0.591,1.338,0.916,2.168,0.916h7.997c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-7.997c-1.089,0-2.142-0.445-2.889-1.223c-0.737-0.768-1.12-1.771-1.078-2.828c0.062-1.539,1.114-2.944,2.618-3.497c0.549-0.201,1.117-0.277,1.688-0.229c0.332-1.268,1.507-2.197,2.882-2.197c0.432,0,0.854,0.094,1.241,0.269c0.011-0.199,0.034-0.398,0.072-0.597c0.35-1.844,1.924-3.291,3.827-3.519c1.252-0.153,2.462,0.2,3.417,0.983c0.668,0.548,1.147,1.255,1.399,2.048c0.718-0.569,1.61-0.883,2.558-0.883c2.257,0,4.093,1.803,4.093,4.018c0,0.02,0,0.039-0.001,0.059c1.604,0.52,2.728,2.012,2.728,3.7C46.718,69.235,44.937,70.982,42.748,70.982z M33.979,70.982h-0.327c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h0.327c0.276,0,0.5,0.224,0.5,0.5S34.255,70.982,33.979,70.982z"></path><path fill="#472b29" d="M41.198 65.69c-.018 0-.036-.002-.055-.006-.135-.03-.22-.164-.189-.299.034-.152.087-.3.155-.44.556-1.123 2.087-1.539 3.41-.925.126.058.181.206.122.331-.058.126-.208.179-.331.122-1.084-.498-2.317-.188-2.753.693-.051.104-.09.215-.115.328C41.415 65.611 41.312 65.69 41.198 65.69zM36.513 70.982h-1.005c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.005c.276 0 .5.224.5.5S36.789 70.982 36.513 70.982z"></path><path fill="#fff" d="M17.008 50.708H6.978c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.03c.276 0 .5.224.5.5S17.285 50.708 17.008 50.708zM19.89 50.708h-1.446c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S20.166 50.708 19.89 50.708zM23.944 50.708h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S24.22 50.708 23.944 50.708zM23.944 52.573h-9.616c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.616c.276 0 .5.224.5.5S24.22 52.573 23.944 52.573zM12.596 52.573h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S12.872 52.573 12.596 52.573zM10.219 52.573H8.763c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S10.495 52.573 10.219 52.573zM19.355 48.843h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S19.631 48.843 19.355 48.843zM19.355 46.978h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S19.631 46.978 19.355 46.978zM16.086 54.438h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S16.363 54.438 16.086 54.438z"></path>
                </svg>
                <h1 className='fs-800 font-bold'>An Error Occured!</h1>
                <p className='fs-500 font-medium'>Page Not Found.</p>
            </div>
        </div>
    )
}
