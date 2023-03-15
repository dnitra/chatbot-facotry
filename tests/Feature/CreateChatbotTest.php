<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CreateChatbotTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_chatbot_create_page_can_be_loaded(): void
    {
        $response = $this->get('/chatbot/create');
        $response->assertStatus(302);
    }
}
