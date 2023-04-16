resource "aws_ecs_cluster" "main" {
  name = "${var.name}-cluster-${var.environment}"
}

resource "aws_ecs_task_definition" "task_definition" {
  family                   = "${var.name}-task-definition-${var.environment}"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn

  container_definitions = jsonencode([
    {
      name      = "${var.name}-container-${var.environment}"
      image     = "${var.container_image}"
      essential = true
      portMappings = [
        {
          protocol      = "tcp"
          containerPort = var.container_port
          hostPort      = var.host_port
        }
      ],
      logConfiguration = {
        logDriver = "awslogs",
        options = {
          awslogs-group = aws_cloudwatch_log_group.log_group.id,
          awslogs-region : var.region,
          awslogs-stream-prefix : "ecs"
        }
      }
    },
  ])
}

resource "aws_ecs_service" "main" {
  name                = "${var.name}-service-${var.environment}"
  cluster             = aws_ecs_cluster.main.id
  task_definition     = aws_ecs_task_definition.task_definition.arn
  desired_count       = 1
  launch_type         = "FARGATE"
  scheduling_strategy = "REPLICA"

  network_configuration {
    subnets          = concat(aws_subnet.private.*.id, aws_subnet.public.*.id)
    assign_public_ip = true
    security_groups  = [aws_security_group.service_security_group.id]
  }
}
