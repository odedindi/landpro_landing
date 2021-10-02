uniform sampler2D globeTexture;

varying vec2 vertexUV;

varying vec3 vertexNormal;

void main() {
    float intensity = 0.5 - dot(vertexNormal, vec3(0, 0, 1));
    vec3 atmosphere = vec3(0.6, 0.7, 1.0) * pow(intensity, 1.9);
    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}