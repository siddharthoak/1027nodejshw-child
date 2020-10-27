FROM sidoak/nodejs-parent:latest
LABEL io.openshift.expose-services="8080:http"
EXPOSE 8080
RUN chgrp -R 0 /usr/src/app && chown -R g=u /usr/src/app
USER 1001
CMD [ "node", "child.js" ]
