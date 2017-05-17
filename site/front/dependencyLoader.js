/**
 * Created by logov on 16-May-17.
 */

export default function(requirement) {
    if (!window.moduleDependencies.includes(requirement)) {
        window.moduleDependencies.push(requirement);
    }
}
