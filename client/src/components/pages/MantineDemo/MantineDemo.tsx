import { useState } from 'react';
import { Stack, Title, Group, Space, Code, Divider } from '@mantine/core';
import { Button, Badge, Avatar, ProgressBar } from '../../atoms';
import { Card } from '../../molecules';

export const MantineDemo = () => {
  const [progress, setProgress] = useState(65);
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Title order={1} mb="xl">
        🚀 Mantine + Atomic Design Demo
      </Title>

      {/* Buttons Demo */}
      <Card>
        <Title order={2} size="h3" mb="md">
          ⚛️ Button Atoms
        </Title>
        <Stack gap="md">
          <Group>
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
            <Button variant="primary" size="md">
              Primary Medium
            </Button>
            <Button variant="primary" size="lg">
              Primary Large
            </Button>
          </Group>

          <Group>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </Group>

          <Group>
            <Button
              variant="primary"
              loading={loading}
              onClick={handleLoadingDemo}
            >
              {loading ? 'Loading...' : 'Test Loading'}
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" fullWidth>
              Full Width
            </Button>
          </Group>
        </Stack>

        <Space h="md" />
        <Code block>{`<Button variant="primary" size="md" loading={isLoading}>
  Click me
</Button>`}</Code>
      </Card>

      <Space h="xl" />

      {/* Badges Demo */}
      <Card>
        <Title order={2} size="h3" mb="md">
          🏷️ Badge Atoms
        </Title>
        <Stack gap="md">
          <Group>
            <Badge variant="primary" size="sm">
              Primary
            </Badge>
            <Badge variant="secondary" size="sm">
              Secondary
            </Badge>
            <Badge variant="success" size="sm">
              Success
            </Badge>
            <Badge variant="warning" size="sm">
              Warning
            </Badge>
            <Badge variant="info" size="sm">
              Info
            </Badge>
          </Group>

          <Group>
            <Badge variant="primary" size="md">
              Medium
            </Badge>
            <Badge variant="success" size="lg">
              Large
            </Badge>
          </Group>
        </Stack>

        <Space h="md" />
        <Code block>{`<Badge variant="success" size="md">
  Active
</Badge>`}</Code>
      </Card>

      <Space h="xl" />

      {/* Avatars Demo */}
      <Card>
        <Title order={2} size="h3" mb="md">
          👤 Avatar Atoms
        </Title>
        <Stack gap="md">
          <Group>
            <Avatar size="sm" initials="SM" />
            <Avatar size="md" initials="MD" />
            <Avatar size="lg" initials="LG" />
            <Avatar size="xl" initials="XL" />
          </Group>

          <Group>
            <Avatar
              size="lg"
              src="https://images.unsplash.com/photo-1494790108755-2616b612b1-3?w=64&h=64&fit=crop&crop=face"
              alt="User Avatar"
            />
            <Avatar size="lg" initials="АК" />
          </Group>
        </Stack>

        <Space h="md" />
        <Code block>{`<Avatar size="lg" initials="АК" />
<Avatar size="lg" src="path/to/image.jpg" />`}</Code>
      </Card>

      <Space h="xl" />

      {/* Progress Demo */}
      <Card>
        <Title order={2} size="h3" mb="md">
          📊 ProgressBar Atoms
        </Title>
        <Stack gap="md">
          <div>
            <Group mb="xs">
              <Button
                size="sm"
                onClick={() => setProgress(Math.max(0, progress - 10))}
              >
                -10%
              </Button>
              <Button
                size="sm"
                onClick={() => setProgress(Math.min(100, progress + 10))}
              >
                +10%
              </Button>
              <span>Текущий: {progress}%</span>
            </Group>

            <ProgressBar value={progress} max={100} color="primary" showLabel />
          </div>

          <div>
            <ProgressBar value={75} max={100} color="success" size="sm" />
            <Space h="xs" />
            <ProgressBar value={50} max={100} color="warning" size="md" />
            <Space h="xs" />
            <ProgressBar value={25} max={100} color="info" size="lg" />
          </div>
        </Stack>

        <Space h="md" />
        <Code block>{`<ProgressBar 
  value={75} 
  max={100} 
  color="primary" 
  showLabel 
/>`}</Code>
      </Card>

      <Space h="xl" />

      {/* Cards Demo */}
      <Card>
        <Title order={2} size="h3" mb="md">
          🃏 Card Molecules
        </Title>
        <Stack gap="md">
          <Group align="flex-start">
            <Card variant="default" style={{ width: 200 }}>
              <Title order={4} size="h5">
                Default Card
              </Title>
              <p>Стандартная карточка с базовой тенью</p>
            </Card>

            <Card variant="elevated" style={{ width: 200 }}>
              <Title order={4} size="h5">
                Elevated Card
              </Title>
              <p>Приподнятая карточка с большей тенью</p>
            </Card>

            <Card variant="outlined" style={{ width: 200 }}>
              <Title order={4} size="h5">
                Outlined Card
              </Title>
              <p>Карточка с границей без тени</p>
            </Card>
          </Group>
        </Stack>

        <Space h="md" />
        <Code block>{`<Card variant="elevated">
  <Title>Card Title</Title>
  <p>Card content...</p>
</Card>`}</Code>
      </Card>

      <Space h="xl" />

      {/* Integration Demo */}
      <Card variant="elevated">
        <Title order={2} size="h3" mb="md">
          🎯 Полная интеграция
        </Title>
        <p>Пример использования всех компонентов вместе:</p>

        <Divider my="md" />

        <Group mb="md">
          <Avatar size="md" initials="ДК" />
          <div>
            <Title order={4} size="h5">
              Дмитрий Кукушкин
            </Title>
            <Badge variant="success" size="sm">
              Онлайн
            </Badge>
          </div>
        </Group>

        <p>Прогресс обучения:</p>
        <ProgressBar value={78} max={100} color="primary" showLabel />

        <Space h="md" />

        <Group>
          <Button variant="primary">Продолжить</Button>
          <Button variant="outline">Настройки</Button>
        </Group>

        <Space h="md" />
        <Code block>{`// Все компоненты используют Mantine под капотом
// но предоставляют наш унифицированный API!

<Avatar initials="ДК" size="md" />
<Badge variant="success">Онлайн</Badge>
<ProgressBar value={78} showLabel />
<Button variant="primary">Продолжить</Button>`}</Code>
      </Card>

      <Space h="xl" />

      <Card style={{ backgroundColor: '#f8f9fa' }}>
        <Title order={3} ta="center" c="dimmed">
          ✨ Теперь ваши компоненты работают на Mantine! ✨
        </Title>
        <p style={{ textAlign: 'center', color: '#666' }}>
          Тот же API, но с лучшей производительностью, доступностью и
          функционалом
        </p>
      </Card>
    </div>
  );
};
