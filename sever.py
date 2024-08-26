import http.server
import socketserver

PORT = 8000
# Địa chỉ IP của máy chủ, có thể sử dụng '0.0.0.0' để cho phép tất cả các địa chỉ IP truy cập
HOST = '0.0.0.0'

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
    print(f"Serving at http://{HOST}:{PORT}")
    httpd.serve_forever()
