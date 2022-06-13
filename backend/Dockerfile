FROM golang:1.14.6-alpine3.12 as builder

COPY go.mod go.sum /go/src/fifczak/go_test_backend/
WORKDIR /go/src/fifczak/go_test_backend
RUN go mod download
COPY . /go/src/fifczak/go_test_backend
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o build/go_test_backend fifczak/go_test_backend


FROM alpine

RUN apk add --no-cache ca-certificates && update-ca-certificates
COPY --from=builder /go/src/fifczak/go_test_backend/build/go_test_backend /usr/bin/go_test_backend

EXPOSE 5015 5015

ENTRYPOINT ["/usr/bin/go_test_backend"]
