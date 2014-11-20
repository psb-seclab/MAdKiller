#!/usr/bin/python
# import tornado 
import tornado.web
import tornado.websocket
import tornado.ioloop

class WebSocketHandler(tornado.websocket.WebSocketHandler):
	def check_origin(self, origin):
		return True

	# Client makes a connection
	def open(self):
		print "New connection"
		self.write_message("You are connected")

	# Server recives a message
	def on_message(self, message):
		self.write_message(message)
		print(message)

	# Client closes a connection
	def on_close(self):
		print "Client disconnected"

application = tornado.web.Application([
	(r"/", WebSocketHandler),
])

if __name__ == "__main__":
	application.listen(8888)
	tornado.ioloop.IOLoop.instance().start()
