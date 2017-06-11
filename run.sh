/bin/sed -i "s|STUDENTS_SERVICE_URL|${STUDENTS_SERVICE_URL}|" /usr/share/nginx/html/api_urls.js
/bin/sed -i "s|SUBJECTS_SERVICE_URL|${SUBJECTS_SERVICE_URL}|" /usr/share/nginx/html/api_urls.js
/bin/sed -i "s|ENROLLMENTS_SERVICE_URL|${ENROLLMENTS_SERVICE_URL}|" /usr/share/nginx/html/api_urls.js

nginx -g 'daemon off;'